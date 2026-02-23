import GeminiImage from "../assets/Tarek.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-[var(--background)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-[var(--primary)]/10 opacity-50"></div>
          <div className="relative cyber-card p-3 bg-[var(--border)]">
            <img
              alt="Tarek Mohamed"
              className=" transition-all duration-1000 w-full aspect-[4/5] object-cover"
              src={GeminiImage}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 font-mono text-[10px] p-5 bg-[var(--primary)] text-black font-bold uppercase tracking-tighter">
            CORE_ENGINEER::001
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-mono text-[var(--primary)] text-xs mb-6 uppercase tracking-[0.5em]">
            01. Profile Summary
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-[var(--text)]">
            Frontend Engineer with Full-Stack Firepower
          </h3>
          <p className="text-[var(--text-muted)] mb-8 leading-relaxed text-lg">
            Software Engineer specializing in frontend development with proven experience delivering production-ready web applications under tight deadlines. Expert in React, TypeScript, and modern UI frameworks — with hands-on backend skills in Java Spring Boot, Node.js, and RESTful API design. Successfully shipped commercial projects including paid client work, combining pixel-perfect interfaces with robust system architecture.
          </p>
          <div className="grid grid-cols-1 gap-4 font-mono text-xs uppercase tracking-widest text-[var(--text)]">
            <div className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors">
              <span className="text-[var(--primary)] font-bold">01.</span>{" "}
              Production-Ready React & TypeScript Systems
            </div>
            <div className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors">
              <span className="text-[var(--primary)] font-bold">02.</span>{" "}
              Full-Stack Delivery: Frontend Lead + Backend Architecture
            </div>
            <div className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors">
              <span className="text-[var(--primary)] font-bold">03.</span>{" "}
              Commercial Projects Shipped Under Pressure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
