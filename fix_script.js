const fs = require('fs');
let content = fs.readFileSync('fe/src/app/page.tsx', 'utf8');

// Remove the <script> block
content = content.replace(/<script>[\s\S]*?<\/script>/, '');

// Also check for any generic html issues (like unescaped < in text)
content = content.replace(/<span className="material-symbols-outlined text-\[18px\]">arrow_forward<\/span>/g, '<span className="material-symbols-outlined text-[18px]">arrow_forward</span>');

// Check for any unclosed tags or errors
fs.writeFileSync('fe/src/app/page.tsx', content);
