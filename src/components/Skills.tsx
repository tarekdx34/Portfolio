const Skills = () => {
  const frontendSkills = [
    { name: "React / TypeScript", level: 95 },
    { name: "Tailwind CSS", level: 98 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 / CSS3", level: 98 },
    { name: "shadcn/ui / Radix UI", level: 90 },
    { name: "React Hook Form / Zod", level: 85 },
  ];

  const hardSystemSkills = [
    "JAVA",
    "SPRING BOOT",
    "PYTHON",
    "C",
    "EMBEDDED C",
    "ASSEMBLY",
    "NODE.JS",
    "EXPRESS",
    "REST APIs",
    "JWT AUTH",
    "MATLAB",
  ];

  const environmentTools = [
    "Git & GitHub",
    "VS Code",
    "Chrome DevTools",
    "Docker",
    "Kubernetes",
    "MATLAB Simulink",
    "LaTeX / Overleaf",
  ];

  const practices = [
    "Component-Based Architecture",
    "State Management",
    "UI/UX Principles",
    "Responsive Design",
    "Version Control",
    "Agile Development",
  ];

  return (
    <section
      id="skills"
      className="py-32 bg-[var(--surface)]/50 border-y border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-mono text-[var(--primary)] text-xs mb-4 uppercase tracking-[0.5em]">
            04. Technical Capabilities
          </h2>
          <h3 className="text-5xl font-black text-[var(--text)]">System Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Skills with Progress Bars */}
          <div className="bg-[var(--background)] border border-[var(--border)] p-10 cyber-card group hover:border-[var(--primary)]/40 transition-colors">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-[var(--primary)] text-3xl">
                developer_mode_tv
              </span>
              <h4 className="font-mono text-sm uppercase font-bold tracking-[0.2em] text-[var(--text)]">
                Frontend
              </h4>
            </div>
            <ul className="space-y-6">
              {frontendSkills.map((skill) => (
                <li key={skill.name} className="space-y-3">
                  <div className="flex justify-between font-mono text-[10px] uppercase text-[var(--text-muted)]">
                    <span>{skill.name}</span>
                    <span className="text-[var(--primary)]">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-[var(--border)]">
                    <div
                      className="h-full bg-[var(--primary)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hard Systems / Languages */}
          <div className="bg-[var(--background)] border border-[var(--border)] p-10 cyber-card group hover:border-[var(--secondary)]/40 transition-colors">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-[var(--secondary)] text-3xl">
                memory
              </span>
              <h4 className="font-mono text-sm uppercase font-bold tracking-[0.2em] text-[var(--text)]">
                Hard Systems
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {hardSystemSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 border border-[var(--border)] font-mono text-[10px] text-[var(--text-muted)] hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Practices Sub-section */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4">
                Practices
              </h5>
              <div className="flex flex-wrap gap-2">
                {practices.map((practice) => (
                  <span
                    key={practice}
                    className="px-2 py-1 text-[9px] font-mono bg-[var(--border)] text-[var(--text-muted)]"
                  >
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Environment & Tools */}
          <div className="bg-[var(--background)] border border-[var(--border)] p-10 cyber-card group hover:border-[var(--text)]/40 transition-colors">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-[var(--text)] text-3xl">
                settings_ethernet
              </span>
              <h4 className="font-mono text-sm uppercase font-bold tracking-[0.2em] text-[var(--text)]">
                Environment
              </h4>
            </div>
            <div className="space-y-4">
              {environmentTools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center justify-between p-3 bg-[var(--surface)] border border-[var(--border)]"
                >
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase">
                    {tool}
                  </span>
                  <span className="material-symbols-outlined text-sm text-[var(--primary)]">
                    check_circle
                  </span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4">
                Languages
              </h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                  <span>English</span>
                  <span className="text-[var(--primary)]">Expert</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                  <span>Arabic</span>
                  <span className="text-[var(--primary)]">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;