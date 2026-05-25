const fs = require('fs');
const filePath = 'E:/Project/website-sicapit/src/app/rafting/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const particleType = 'interface Particle { id: number; x: number; y: number; dX: number; dur: number; del: number; }';

content = content.replace(
  /function HeroSection\(\) \{\r?\n\s*const \[particles, setParticles\] = useState<any\[\]>\(\[\]\)/,
  particleType + '\nfunction HeroSection() {\n  const [particles, setParticles] = useState<Particle[]>([])'
);

content = content.replace(
  /useEffect\(\(\) => \{\r?\n\s*setParticles\(\[\.\.\.Array/,
  'useEffect(() => {\n    const timeoutId = setTimeout(() => {\n      setParticles([...Array'
);

content = content.replace(
  /del: Math.random\(\) \* 5,\r?\n\s*\}\)\)\)\r?\n\s*\}, \[\]\)/,
  'del: Math.random() * 5,\n    })));\n    }, 0);\n    return () => clearTimeout(timeoutId);\n  }, [])'
);

content = content.replace(
  /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/>/g,
  '<Image src="" alt="" fill sizes="100vw" className="" />'
);

content = content.replace(
  /<img\s+src=\{([^}]+)\}\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/>/g,
  '<Image src={} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="" />'
);

content = content.replace(
  /<img\s+src=\{src\}\s+alt=\{([^}]+)\}\s+className="([^"]+)"\s*\/>/g,
  '<Image src={src} alt={} fill sizes="100vw" className="" />'
);

content = content.replace(
  /<img\s+src=\{selectedImg\}\s+alt="Gambar Galeri"\s+className="([^"]+)"\s*\/>/g,
  '<Image src={selectedImg} alt="Gambar Galeri" fill sizes="100vw" className="" />'
);

// Fix unused imports
content = content.replace(/import \{.*?DialogFooter,\s*DialogClose,\s*DialogTrigger.*?\} from '@\/components\/ui\/dialog'/g, "import {\n  Dialog,\n  DialogContent,\n  DialogHeader,\n  DialogTitle,\n  DialogDescription\n} from '@/components/ui/dialog'");
content = content.replace(/Mountain,/g, '');
content = content.replace(/X,/g, '');
content = content.replace(/const \{ toast \} = useToast\(\)\s*/g, '');

fs.writeFileSync(filePath, content, 'utf8');
