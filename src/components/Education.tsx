const Education = () => {
  return (
    <section
      id="education"
      className="py-32 bg-[var(--surface)]/30 border-y border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-mono text-[var(--primary)] text-xs mb-4 uppercase tracking-[0.5em]">
            Academic Record
          </h2>
          <h3 className="text-4xl font-black text-[var(--text)]">Education & Training</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* University */}
          <div className="border border-[var(--border)] bg-[var(--background)] p-10 cyber-card group hover:border-[var(--primary)]/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-[var(--primary)] text-3xl">school</span>
              <h4 className="font-mono text-sm uppercase font-bold tracking-[0.2em] text-[var(--text)]">
                Alexandria University
              </h4>
            </div>
            <p className="text-[var(--text)] text-lg font-bold mb-2">
              BS in Communication & Electronics Engineering
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] text-[var(--text-muted)] px-3 py-1 border border-[var(--border)]">
                2021 — 2026
              </span>
              <span className="font-mono text-[10px] text-[var(--primary)] px-3 py-1 border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                GPA: 3.42/4.0 — EXCELLENT
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
              In-depth knowledge in analog and digital circuit design, signal processing,
              transmission systems, and embedded systems. Strong technical skills through
              coursework in Embedded C, Assembly Language, and operating systems.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Embedded Systems", "Operating Systems", "Data Structures", "Assembly", "Python", "C"].map((course) => (
                <span key={course} className="px-3 py-1 text-[10px] font-mono bg-[var(--border)] text-[var(--text-muted)]">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* DEPI Scholarship */}
          <div className="border border-[var(--border)] bg-[var(--background)] p-10 cyber-card group hover:border-[var(--secondary)]/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-[var(--secondary)] text-3xl">workspace_premium</span>
              <h4 className="font-mono text-sm uppercase font-bold tracking-[0.2em] text-[var(--text)]">
                DEPI Scholarship
              </h4>
            </div>
            <p className="text-[var(--text)] text-lg font-bold mb-2">
              React Frontend Web Developer
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] text-[var(--text-muted)] px-3 py-1 border border-[var(--border)]">
                JUN 2025 — DEC 2025
              </span>
              <span className="font-mono text-[10px] text-[var(--secondary)] px-3 py-1 border border-[var(--secondary)]/20 bg-[var(--secondary)]/5">
                COHORT 3
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
              Selected for Egypt's Digital Pioneers Initiative — an intensive 6-month scholarship
              by the Ministry of Communications. Building responsive, interactive web applications
              using React, TypeScript, and modern development practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Express", "Docker", "Kubernetes", "Git"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-[10px] font-mono bg-[var(--border)] text-[var(--text-muted)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
