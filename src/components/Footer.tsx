import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8">
            <span className="text-[var(--text-muted)] font-mono text-[10px] uppercase tracking-widest">
              © {currentYear} TAREK_MOHAMED
            </span>
            <div className="flex gap-6">
              <a
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                href="https://github.com/tarekdx34"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">terminal</span>
              </a>
              <a
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                href="https://www.linkedin.com/in/tarek-mohamed-salah-671b7a222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">code</span>
              </a>
              <a
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                href="mailto:tarekdx3@gmail.com"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
            </div>
          </div>

          <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--primary)]/40 rounded-full"></span>
            OPTIMIZED_SYSTEM_RENDER v2.4.0
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--surface)] transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;