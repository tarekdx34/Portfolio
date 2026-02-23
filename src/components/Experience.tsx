const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Alex Eagles Aero Design",
      period: "2024 — PRESENT // ALEXANDRIA",
      description:
        "Developed Python scripts for autonomous drone movement and obstacle avoidance. Implemented mapping techniques for terrain analysis and real-time decision-making in flight operations. Applied embedded systems and software architecture knowledge in UAV control systems.",
      tags: ["PYTHON", "DRONEKIT", "REACT", "EMBEDDED SYSTEMS"],
      current: true,
    },
    {
      title: "Software Engineer Intern",
      company: "ALX",
      period: "2023 — 2024 // REMOTE",
      description:
        "Completed intensive training in software engineering fundamentals through real-world projects and peer collaboration. Developed strong skills in system programming, data structures, and backend development with a DevOps mindset.",
      tags: ["C", "PYTHON", "DATA STRUCTURES", "LINUX", "GIT"],
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-[var(--surface)]/30 border-y border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-mono text-[var(--primary)] text-xs mb-4 uppercase tracking-[0.5em]">
            02. Experience Logs
          </h2>
          <h3 className="text-4xl font-black text-[var(--text)]">Professional Trajectory</h3>
        </div>

        <div className="space-y-16 relative before:absolute before:left-[11px] before:top-0 before:h-full before:w-[1px] before:bg-[var(--border)]">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-6 h-6 bg-[var(--background)] border ${
                  exp.current ? "border-[var(--primary)]" : "border-[var(--text-muted)]"
                } flex items-center justify-center`}
              >
                <div
                  className={`w-2 h-2 ${
                    exp.current ? "bg-[var(--primary)]" : "bg-[var(--text-muted)]"
                  }`}
                ></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[var(--text)]">{exp.title}</h4>
                  <p
                    className={`font-mono text-xs uppercase mt-1 ${
                      exp.current ? "text-[var(--primary)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {exp.company}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] mt-2 md:mt-0 px-3 py-1 border border-[var(--border)]">
                  {exp.period}
                </span>
              </div>

              <p className="text-[var(--text-muted)] max-w-3xl text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-mono bg-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;