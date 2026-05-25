
const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const newRoot = \:root {
  /* Natural Vibe Colors from DESIGN.md */
  --color-merah:      #dc2626;
  --color-biru-muda:  #00f2fe;
  --color-tanah:      #4A3728;
  --color-daun:       #2D5016;
  --color-lumut:      #6B7C3A;
  --color-pasir:      #C8A96E;
  --color-air:        #7BAFC4;
  --color-kabut:      #F0EBE0;
  --color-malam:      #1A1209;

  --shadow-organic: 0 10px 40px rgba(74, 55, 40, 0.08);
  --shadow-malam: 0 10px 40px rgba(0, 0, 0, 0.5);

  /* Fallback Defaults (Dark Mode) */
  --surface: var(--color-malam);
  --surface-strong: #251b0f;
  --brand: var(--color-merah);
  --muted: var(--color-pasir);
  --line: rgba(240, 235, 224, 0.08);
  --shadow: var(--shadow-malam);
  --background: var(--color-malam);
  --foreground: var(--color-kabut);
}

html.dark, [class~='dark'] {
  --surface: var(--color-malam);
  --surface-strong: #251b0f;
  --background: var(--color-malam);
  --foreground: var(--color-kabut);
  --brand: var(--color-merah);
  --muted: var(--color-pasir);
  --muted-foreground: #A99677;
  --line: rgba(240, 235, 224, 0.08);
  --shadow: var(--shadow-malam);
  
  --card: var(--color-malam);
  --card-foreground: var(--color-kabut);
  --popover: var(--color-malam);
  --popover-foreground: var(--color-kabut);
  --primary: var(--color-merah);
  --primary-foreground: #ffffff;
  --secondary: var(--color-tanah);
  --secondary-foreground: var(--color-kabut);
  --accent: var(--color-tanah);
  --accent-foreground: var(--color-kabut);
  --destructive: var(--color-merah);
  --border: rgba(240, 235, 224, 0.15);
  --input: rgba(240, 235, 224, 0.15);
  --ring: var(--color-merah);
  --radius: 0.5rem;
}

html.light, [class~='light'] {
  --surface: var(--color-kabut);
  --surface-strong: #E6E0D4;
  --background: var(--color-kabut);
  --foreground: var(--color-malam);
  --brand: var(--color-merah);
  --muted: var(--color-tanah);
  --muted-foreground: #6b5c51;
  --line: rgba(74, 55, 40, 0.15);
  --shadow: var(--shadow-organic);

  --card: var(--color-kabut);
  --card-foreground: var(--color-malam);
  --popover: var(--color-kabut);
  --popover-foreground: var(--color-malam);
  --primary: var(--color-merah);
  --primary-foreground: #ffffff;
  --secondary: var(--color-pasir);
  --secondary-foreground: var(--color-malam);
  --accent: var(--color-pasir);
  --accent-foreground: var(--color-malam);
  --destructive: var(--color-merah);
  --border: rgba(74, 55, 40, 0.15);
  --input: rgba(74, 55, 40, 0.15);
  --ring: var(--color-merah);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-strong: var(--surface-strong);
  --color-brand: var(--brand);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-line: var(--line);
  --font-sans: var(--font-sans);
  --font-heading: var(--font-heading);
  --font-mono: var(--font-mono);
  --color-border: var(--border);
}\;

const regex = /:root \\{[\\s\\S]*?@theme inline \\{[\\s\\S]*?\\}/;
css = css.replace(regex, newRoot);
fs.writeFileSync('src/app/globals.css', css);
console.log('Done');

