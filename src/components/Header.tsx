import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CONTACT_WHATSAPP, siteData } from "../data/content";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function Header() {
  const { isDark, toggleDark } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Background blur and transparency based on scroll
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 15, 26, 0)", "rgba(10, 15, 26, 0.85)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
      
      // Auto close mobile menu on scroll if open
      if (mobileMenuOpen && latest > 10) {
        setMobileMenuOpen(false);
      }
    });
  }, [scrollY, mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        style={{ background, backdropFilter }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "border-b border-border-subtle" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-50">
            <div className="w-8 h-8 bg-blue-700 rounded-sm transform rotate-45 flex items-center justify-center">
              <span className="text-main font-bold text-xs -rotate-45">ADS</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-main hidden sm:block">Aidar Dev Studio</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-main transition-colors uppercase tracking-wider font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 text-muted hover:text-main transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(29,78,216,0.3)] inline-flex items-center justify-center"
            >
              Заказать сайт
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 text-muted hover:text-main transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="relative z-50 p-2 -mr-2 text-main"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-center gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {siteData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display text-main hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 rounded-full bg-blue-600 text-main font-medium text-lg hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(0,85,255,0.4)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Заказать сайт
          </a>
        </nav>
      </motion.div>
    </>
  );
}
