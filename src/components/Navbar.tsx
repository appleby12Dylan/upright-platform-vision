import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-bold text-primary tracking-wider">
          DA_
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["upright", "spothero", "experience", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
