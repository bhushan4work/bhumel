const fs = require('fs');

let jsx = fs.readFileSync('extracted_jsx.txt', 'utf8');

// Replace the before/after views with React conditional logic
// In the HTML, the buttons were:
// <button id="btn-before" ...>
// <button id="btn-after" ...>
// I need to replace them.

jsx = jsx.replace(
  /<button className="([^"]*?)" id="btn-before">\s*Before: Multi-Source Divergence\s*<\/button>/,
  `<button 
    className={visualMode === 'before' ? "px-space-md py-1.5 rounded-md font-body-sm text-body-sm font-semibold transition-all bg-primary text-on-primary shadow-sm" : "px-space-md py-1.5 rounded-md font-body-sm text-body-sm font-semibold transition-all text-on-surface-variant hover:text-on-surface"}
    onClick={() => setVisualMode('before')}
  >
    Before: Multi-Source Divergence
  </button>`
);

jsx = jsx.replace(
  /<button className="([^"]*?)" id="btn-after">\s*After: Certified Harmonized Result\s*<\/button>/,
  `<button 
    className={visualMode === 'after' ? "px-space-md py-1.5 rounded-md font-body-sm text-body-sm font-semibold transition-all bg-primary text-on-primary shadow-sm" : "px-space-md py-1.5 rounded-md font-body-sm text-body-sm font-semibold transition-all text-on-surface-variant hover:text-on-surface"}
    onClick={() => setVisualMode('after')}
  >
    After: Certified Harmonized Result
  </button>`
);

// For the views themselves:
// <div className="hidden relative w-full h-\[320px\] flex items-center justify-center" id="view-before">
jsx = jsx.replace(
  /<div className="([^"]*?)" id="view-before">/g,
  `<div className={\`relative w-full h-[320px] flex items-center justify-center \${visualMode === 'before' ? '' : 'hidden'}\`}>`
);

// <div className="relative w-full h-\[320px\] flex items-center justify-center" id="view-after">
jsx = jsx.replace(
  /<div className="([^"]*?)" id="view-after">/g,
  `<div className={\`relative w-full h-[320px] flex items-center justify-center \${visualMode === 'after' ? '' : 'hidden'}\`}>`
);

const pageTsx = `"use client";

import React, { useState } from "react";

export default function Page() {
  const [visualMode, setVisualMode] = useState<'before' | 'after'>('after');

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('fe/src/app/page.tsx', pageTsx);
console.log('fe/src/app/page.tsx generated.');
