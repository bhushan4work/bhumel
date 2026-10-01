const fs = require('fs');

const html = fs.readFileSync('fe/design.html', 'utf8');

// Extract everything between <header> and </footer>
const bodyMatch = html.match(/<header[\s\S]*<\/footer>/);
if (!bodyMatch) {
  console.log("No body match");
  process.exit(1);
}

let jsx = bodyMatch[0];

// Basic JSX conversions
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, (match) => `{/* ${match.replace(/<!--|-->/g, '').trim()} */}`);
jsx = jsx.replace(/xmlns=".*?"/g, ''); // React handles XML namespaces
jsx = jsx.replace(/viewbox=/g, 'viewBox=');
jsx = jsx.replace(/fill-opacity=/g, 'fillOpacity=');
jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
jsx = jsx.replace(/patternunits=/g, 'patternUnits=');
jsx = jsx.replace(/foreignobject/g, 'foreignObject');
jsx = jsx.replace(/onclick=".*?"/g, ''); // we will manually handle onClick
jsx = jsx.replace(/<rect([^>]+)><\/rect>/g, '<rect$1 />');
jsx = jsx.replace(/<circle([^>]+)><\/circle>/g, '<circle$1 />');
jsx = jsx.replace(/<polygon([^>]+)><\/polygon>/g, '<polygon$1 />');
jsx = jsx.replace(/<line([^>]+)><\/line>/g, '<line$1 />');
jsx = jsx.replace(/<path([^>]+)><\/path>/g, '<path$1 />');
jsx = jsx.replace(/<hr([^>]*)>/g, '<hr$1 />');
jsx = jsx.replace(/<br([^>]*)>/g, '<br$1 />');

fs.writeFileSync('extracted_jsx.txt', jsx);
console.log('Extracted JSX to extracted_jsx.txt');
