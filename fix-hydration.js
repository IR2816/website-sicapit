const fs = require('fs');
let content = fs.readFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', 'utf-8');

const oldHero = \unction HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/rafting/2.jpeg"
          alt="Rafting Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand/30 rounded-full"
            initial={{ x: Math.random() * 1440, y: 900 }}
            animate={{ y: -100, x: \\\+=\\\\\\ }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
          />
        ))}
      </div>\;

const newHero = \unction HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="beranda" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/rafting/2.jpeg"
          alt="Rafting Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand/30 rounded-full"
            initial={{ x: Math.random() * 1440, y: 900 }}
            animate={{ y: -100, x: \\\+=\\\\\\ }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
          />
        ))}
      </div>\;

content = content.replace(oldHero, newHero);
fs.writeFileSync('d:/Project/Website Si Capit/src/app/rafting/page.tsx', content);
