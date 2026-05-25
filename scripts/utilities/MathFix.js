const fs = require('fs');
const filePath = 'E:/Project/website-sicapit/src/app/rafting/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace HeroSection definition
content = content.replace(
  /function\s+HeroSection\s*\(\)\s*\{([\s\S]*?)\{\/\*\s*Floating particles\s*\*\/\}[\s\S]*?(<div\s+className="absolute inset-0 overflow-hidden pointer-events-none">[\s\S]*?<\/div>)/,
  \unction HeroSection() {\n  const [particles, setParticles] = useState<any[]>([]);\n\n  useEffect(() => {\n    const generatedParticles = [...Array(6)].map((_, i) => ({\n      id: i,\n      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),\n      initialY: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,\n      animateXValue: Math.random() * 200 - 100,\n      duration: 8 + Math.random() * 6,\n      delay: Math.random() * 5,\n    }));\n    setParticles(generatedParticles);\n  }, []);\n{/* Floating particles */}\n      <div className="absolute inset-0 overflow-hidden pointer-events-none">\n        {particles.map((p) => (\n          <motion.div\n            key={p.id}\n            className="absolute w-2 h-2 bg-white/20 rounded-full"\n            initial={{\n              x: p.initialX,\n              y: p.initialY,\n            }}\n            animate={{\n              y: -100,\n              x: \\\+=\\\\,\n            }}\n            transition={{\n              duration: p.duration,\n              repeat: Infinity,\n              delay: p.delay,\n              ease: 'linear',\n            }}\n          />\n        ))}\n      </div>\
);

fs.writeFileSync(filePath, content, 'utf8');
