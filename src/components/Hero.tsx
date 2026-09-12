import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import CvFile from "../assets/Tarek Mohamed Salah.pdf";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Rotating wireframe cube */}
      <div className="absolute top-[15%] right-[20%] w-24 h-24 md:w-32 md:h-32 animate-[spin3d_20s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border border-[var(--primary)]/15" style={{ transform: "translateZ(48px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/15" style={{ transform: "translateZ(-48px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/10" style={{ transform: "rotateY(90deg) translateZ(48px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/10" style={{ transform: "rotateY(90deg) translateZ(-48px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/8" style={{ transform: "rotateX(90deg) translateZ(48px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/8" style={{ transform: "rotateX(90deg) translateZ(-48px)" }} />
      </div>

      {/* Floating octahedron (diamond shape) */}
      <div className="absolute bottom-[25%] left-[10%] w-16 h-16 md:w-20 md:h-20 animate-[float_8s_ease-in-out_infinite,spin3dSlow_25s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border border-[var(--secondary)]/15 rotate-45" style={{ transform: "rotateX(45deg) rotateZ(45deg)" }} />
        <div className="absolute inset-0 border border-[var(--secondary)]/12 rotate-45" style={{ transform: "rotateY(45deg) rotateZ(45deg)" }} />
        <div className="absolute inset-0 border border-[var(--secondary)]/10 rotate-45" style={{ transform: "rotateX(90deg) rotateZ(45deg)" }} />
      </div>

      {/* Orbital ring */}
      <div className="absolute top-[40%] right-[8%] w-40 h-40 md:w-56 md:h-56 animate-[spin3dSlow_30s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 rounded-full border border-[var(--primary)]/10" style={{ transform: "rotateX(70deg)" }} />
        <div className="absolute inset-4 rounded-full border border-[var(--primary)]/8" style={{ transform: "rotateX(70deg) rotateZ(30deg)" }} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-[var(--primary)]/30 rounded-full animate-pulse" />
      </div>

      {/* Small floating cube bottom-right */}
      <div className="absolute bottom-[15%] right-[30%] w-12 h-12 md:w-16 md:h-16 animate-[float_6s_ease-in-out_1s_infinite,spin3d_15s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 border border-[var(--primary)]/12" style={{ transform: "translateZ(24px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/12" style={{ transform: "translateZ(-24px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/8" style={{ transform: "rotateY(90deg) translateZ(24px)" }} />
        <div className="absolute inset-0 border border-[var(--primary)]/8" style={{ transform: "rotateY(90deg) translateZ(-24px)" }} />
      </div>

      {/* Floating triangle / pyramid wireframe */}
      <div className="absolute top-[60%] left-[25%] animate-[float_10s_ease-in-out_2s_infinite,spin3dSlow_35s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-[0.12]" style={{ transform: "rotateX(20deg) rotateY(30deg)" }}>
          <polygon points="30,5 55,50 5,50" fill="none" stroke="var(--primary)" strokeWidth="1" />
          <polygon points="30,15 45,45 15,45" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating dots constellation */}
      <div className="absolute top-[20%] left-[40%] w-32 h-32 animate-[float_12s_ease-in-out_3s_infinite]" style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg)" }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-[var(--primary)]/20 rounded-full" />
        <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-[var(--primary)]/15 rounded-full" />
        <div className="absolute top-2/3 right-0 w-1 h-1 bg-[var(--secondary)]/20 rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-[var(--primary)]/25 rounded-full animate-pulse" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <line x1="50%" y1="0" x2="0" y2="33%" stroke="var(--primary)" strokeWidth="0.5" />
          <line x1="0" y1="33%" x2="100%" y2="66%" stroke="var(--primary)" strokeWidth="0.5" />
          <line x1="100%" y1="66%" x2="33%" y2="100%" stroke="var(--primary)" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};

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
          <FloatingShapes />
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
            Frontend-focused Software Engineer building production-ready React & TypeScript applications.
            Delivering pixel-perfect UIs backed by solid backend architecture and real-world delivery experience.
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
              href={CvFile}
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
