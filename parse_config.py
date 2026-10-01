import json
import re

with open("fe/design.html", "r") as f:
    html = f.read()

# Extract the JSON object from the script tag
match = re.search(r'tailwind\.config\s*=\s*({.*?});</script>', html, re.DOTALL)
if match:
    config = json.loads(match.group(1))
    theme = config['theme']['extend']
    
    css = '@import "tailwindcss";\n\n@layer base {\n  html, body { margin: 0; padding: 0; }\n  body { overscroll-behavior: none; }\n  main > :first-child { margin-top: 0 !important; }\n  main > :last-child { margin-bottom: 0 !important; }\n}\n\n::-webkit-scrollbar { display: none; }\n\n@theme {\n'
    css += '  --font-sans: var(--font-inter);\n'
    css += '  --font-mono: var(--font-jetbrains-mono);\n\n'
    
    # Colors
    for name, value in theme.get('colors', {}).items():
        css += f'  --color-{name}: {value};\n'
        
    css += '\n'
    
    # Spacing
    for name, value in theme.get('spacing', {}).items():
        css += f'  --spacing-{name}: {value};\n'
        
    css += '\n'
    
    # Border Radius
    for name, value in theme.get('borderRadius', {}).items():
        css += f'  --radius-{name}: {value};\n'
        
    css += '\n'
    
    # Fonts
    for name, value in theme.get('fontFamily', {}).items():
        css += f'  --font-{name}: var(--font-{"jetbrains-mono" if "JetBrains Mono" in value else "inter"});\n'
        
    css += '\n'
    
    # Font Sizes
    for name, value in theme.get('fontSize', {}).items():
        css += f'  --text-{name}: {value[0]};\n'
        if isinstance(value[1], dict):
            if 'lineHeight' in value[1]:
                css += f'  --text-{name}--line-height: {value[1]["lineHeight"]};\n'
            if 'letterSpacing' in value[1]:
                css += f'  --text-{name}--letter-spacing: {value[1]["letterSpacing"]};\n'
            if 'fontWeight' in value[1]:
                css += f'  --text-{name}--font-weight: {value[1]["fontWeight"]};\n'
                
    css += '}\n\n'
    css += 'body {\n  background-color: var(--color-surface);\n  color: var(--color-on-surface);\n  font-family: var(--font-body-md);\n  font-size: var(--text-body-md);\n  line-height: var(--text-body-md--line-height);\n  font-weight: var(--text-body-md--font-weight, 400);\n}\n'

    with open("fe/src/app/globals.css", "w") as f:
        f.write(css)
    print("globals.css updated.")
else:
    print("Could not find tailwind.config in design.html")
