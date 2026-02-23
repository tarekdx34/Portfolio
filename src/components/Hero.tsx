import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const titles = [
    "Frontend Engineer",
    "Software Engineer",
    "React Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentTitleIndex, charIndex, isTyping, titles]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg bg-[var(--background)]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 hero-tech-bg pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 wireframe-cube opacity-20"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 wireframe-cube opacity-10"
            style={{ transform: "rotateX(-20deg) rotateY(60deg)" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--primary)]/30 bg-[var(--primary)]/5 text-[var(--primary)] text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
            <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"></span>
            System Ready: Tarek_Mohamed.exe
          </div>

          {/* Name */}
          <div className="relative">
            <h1 className="text-6xl md:text-[10rem] font-black mb-4 flex flex-col leading-[0.85] tracking-tighter">
              <span className="text-[var(--text)]">TAREK</span>
              <span className="text-outline">MOHAMED</span>
            </h1>
          </div>

          {/* Title with typing */}
          <div className="flex items-center gap-4 mb-8 font-mono text-2xl md:text-4xl text-[var(--text-muted)]">
            <span className="text-[var(--primary)]">&gt;</span>
            <span>
              {displayedText}
              <span className="inline-block w-2 h-8 md:h-10 bg-[var(--primary)] opacity-75 animate-pulse ml-1 align-middle"></span>
            </span>
          </div>

          {/* Description */}
          <p className="max-w-xl text-[var(--text-muted)] mb-12 text-sm md:text-lg leading-relaxed font-light">
            Architecting high-performance digital interfaces with industrial-grade precision.
            Merging the rigorous logic of electronics engineering with modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="bg-[var(--primary)] text-black font-mono text-xs font-bold uppercase tracking-widest px-10 py-5 hover:brightness-110 transition-all flex items-center gap-2"
            >
              Initialize Projects <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="./src/assets/Tarek Mohamed Salah.pdf"
              download="Tarek Mohamed Salah.pdf"
              className="border border-[var(--border)] font-mono text-xs font-bold uppercase tracking-widest px-10 py-5 hover:bg-[var(--surface)] transition-all flex items-center gap-2 text-[var(--text)]"
            >
              <Download className="w-4 h-4" />
              Access_CV.pdf
            </a>
          </div>
        </div>
      </section>

      {/* Status Bar */}
      <div className="border-y border-[var(--border)] bg-[var(--surface)] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Status</p>
            <p className="font-bold text-[var(--primary)] text-sm">AVAILABLE</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Commit History</p>
            <p className="font-bold text-sm text-[var(--text)]">1,200+ PUSHES</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Tech Stack</p>
            <p className="font-bold text-sm text-[var(--text)]">MODERN JS</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">Location</p>
            <p className="font-bold text-sm text-[var(--text)]">ALEXANDRIA, EGYPT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
