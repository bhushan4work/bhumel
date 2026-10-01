const fs = require('fs');

const html = fs.readFileSync('fe/design.html', 'utf8');
const match = html.match(/tailwind\.config\s*=\s*({[\s\S]*?});<\/script>/);

if (match) {
  // Use Function to evaluate the JS object literal safely
  const config = new Function('return ' + match[1])();
  const theme = config.theme.extend;
  
  let css = `@import "tailwindcss";

@layer base {
  html, body { margin: 0; padding: 0; }
  body { overscroll-behavior: none; }
  main > :first-child { margin-top: 0 !important; }
  main > :last-child { margin-bottom: 0 !important; }
}
::-webkit-scrollbar { display: none; }

@theme {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains-mono);

`;

  // Colors
  for (const [name, value] of Object.entries(theme.colors || {})) {
    css += `  --color-${name}: ${value};\n`;
  }
  css += '\n';

  // Spacing
  for (const [name, value] of Object.entries(theme.spacing || {})) {
    css += `  --spacing-${name}: ${value};\n`;
  }
  css += '\n';

  // Radius
  for (const [name, value] of Object.entries(theme.borderRadius || {})) {
    const keyName = name === 'DEFAULT' ? 'radius' : `radius-${name}`;
    css += `  --${keyName}: ${value};\n`;
  }
  css += '\n';

  // Fonts
  for (const [name, value] of Object.entries(theme.fontFamily || {})) {
    const isMono = value[0].includes('JetBrains');
    css += `  --font-${name}: var(--font-${isMono ? 'jetbrains-mono' : 'inter'});\n`;
  }
  css += '\n';

  // Font Sizes
  for (const [name, value] of Object.entries(theme.fontSize || {})) {
    css += `  --text-${name}: ${value[0]};\n`;
    if (value[1]) {
      if (value[1].lineHeight) css += `  --text-${name}--line-height: ${value[1].lineHeight};\n`;
      if (value[1].letterSpacing) css += `  --text-${name}--letter-spacing: ${value[1].letterSpacing};\n`;
      if (value[1].fontWeight) css += `  --text-${name}--font-weight: ${value[1].fontWeight};\n`;
    }
  }

  css += `}

body {
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  font-family: var(--font-body-md);
  font-size: var(--text-body-md);
  line-height: var(--text-body-md--line-height);
  font-weight: var(--text-body-md--font-weight, 400);
}
`;

  fs.writeFileSync('fe/src/app/globals.css', css);
  console.log('globals.css updated.');
} else {
  console.log('Not found');
}
