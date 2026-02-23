import { ExternalLink } from "lucide-react";
import MyTripImage from "../assets/MyTrip Website.png";
import DroneImage from "../assets/Autonomus drone Project.jpg";
import AjarlyImage from "../assets/Ajarly.png";
const Projects = () => {
  const projects = [
    {
      title: "Ajarly - Rental Platform",
      description:
        "A comprehensive real estate rental ecosystem connecting property owners, brokers, and renters in Egypt. Led frontend development and contributed significantly to backend architecture, building a production-ready system with JWT authentication, booking with conflict handling, payment simulation, and analytics.",
      image: AjarlyImage,
      link: "https://ajarly-frontend.vercel.app/",
      tags: ["Full-Stack", "Real Estate"],
      techStack: "Java / Spring / React / TypeScript",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JWT",
        "Cloudinary",
      ],
      features: [
        "Multi-role system with owner analytics dashboard",
        "Property listings with Cloudinary image management",
        "Advanced search with dynamic filters",
        "Booking/payment processing & admin panel",
      ],
    },
    {
      title: "My Trip - Flight Booking",
      description:
        "First paid frontend project — complete flight booking system from search to electronic ticket issuance. Delivered production-ready system in 10-day timeline with dedicated portals for passengers, crew, front desk, and admin.",
      image: MyTripImage,
      tags: ["Frontend", "Logistics"],
      techStack: "React / Tailwind / Axios",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "Radix UI",
      ],
      features: [
        "Flight search with filters & booking/payment",
        "Electronic ticketing & cancellation handling",
        "Role-based access with admin dashboard",
        "Collaborated with Java Spring Boot backend team",
      ],
    },
    {
      title: "Autonomous Drone System",
      description:
        "Comprehensive autonomous drone system with focus on control, navigation, and mission planning. Developed drone control class using DroneKit-Python and MAVLink protocol with real-time mission updates and map visualization.",
      image: DroneImage,
      tags: ["Full-Stack", "Aerospace"],
      techStack: "Python / DroneKit / React",
      technologies: [
        "Python",
        "DroneKit-Python",
        "MAVLink",
        "JavaScript",
        "React",
        "Git",
      ],
      features: [
        "Drone control with DroneKit-Python & MAVLink",
        "Backend-frontend integration for real-time updates",
        "Global path planning & SDK integration",
        "Team of 6 developers — UI/UX design contribution",
      ],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="font-mono text-[var(--primary)] text-xs mb-4 uppercase tracking-[0.5em]">
              03. Deployment Phase
            </h2>
            <h3 className="text-5xl font-black text-[var(--text)]">
              Featured Operations
            </h3>
          </div>
          <p className="text-[var(--text-muted)] font-mono text-xs max-w-sm border-l border-[var(--primary)]/30 pl-6 py-2">
            Technical solutions engineered for scale and performance across
            multiple software domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-[var(--border)] bg-[var(--surface)] p-8 cyber-card transition-all hover:border-[var(--primary)]/30"
            >
              {/* Image */}
              <div className="aspect-video bg-[var(--background)] mb-8 overflow-hidden relative border border-[var(--border)]">
                {project.image ? (
                  <>
                    <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      src={project.image}
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-[var(--text-muted)] text-sm">
                    <span className="text-[var(--primary)] text-4xl font-black opacity-20">
                      {project.title.split(" ")[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 font-mono text-[9px] uppercase tracking-widest border ${
                      i === 0
                        ? "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20"
                        : "bg-[var(--text)]/5 text-[var(--text-muted)] border-[var(--text)]/10"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h4 className="text-2xl font-black mb-4 text-[var(--text)]">
                {project.title}
              </h4>
              <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[var(--text-muted)] text-xs font-mono"
                  >
                    <span className="text-[var(--primary)] mt-0.5">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[9px] font-mono bg-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase font-bold">
                  {project.techStack}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] hover:brightness-125 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
