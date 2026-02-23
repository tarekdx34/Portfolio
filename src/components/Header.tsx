import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById("progress-bar");
      if (bar) bar.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "01. Summary" },
    { id: "experience", label: "02. Logs" },
    { id: "projects", label: "03. Deployment" },
    { id: "skills", label: "04. Arsenal" },
    { id: "contact", label: "05. Link" },
  ];

  return (
    <>
      <div id="progress-bar" style={{ width: "0%" }}></div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[var(--border)] ${
          isScrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md"
            : "bg-[var(--background)]/80 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-12 w-auto dark:invert" />
            <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              System.Protocol v2.4
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 border border-[var(--border)] hover:bg-[var(--surface)] transition-all"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-[var(--border)] hover:bg-[var(--surface)] transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors py-3 border-b border-[var(--border)] last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
