import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[var(--background)] border-t border-[var(--border)] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          {/* Left - Contact Info */}
          <div>
            <h2 className="font-mono text-[var(--primary)] text-xs mb-4 uppercase tracking-[0.5em]">
              05. Transmission
            </h2>
            <h3 className="text-6xl font-black mb-10 tracking-tighter text-[var(--text)]">
              Initiate Handshake
            </h3>
            <p className="text-[var(--text-muted)] mb-16 max-w-md text-lg leading-relaxed">
              I'm currently scouting for advanced engineering challenges. If you have a project
              that requires precision, my channels are open.
            </p>

            <div className="space-y-8">
              <a className="flex items-center gap-6 group" href="mailto:tarekdx3@gmail.com">
                <div className="w-16 h-16 border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl group-hover:text-black">mail</span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    Secure Protocol
                  </p>
                  <p className="font-bold text-xl group-hover:text-[var(--primary)] transition-colors text-[var(--text)]">
                    tarekdx3@gmail.com
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-6 group"
                href="https://www.linkedin.com/in/tarek-mohamed-salah-671b7a222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl group-hover:text-black">language</span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    Network Protocol
                  </p>
                  <p className="font-bold text-xl group-hover:text-[var(--primary)] transition-colors text-[var(--text)]">
                    LinkedIn Profile
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 border border-[var(--border)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    Base Geo-Tag
                  </p>
                  <p className="font-bold text-xl text-[var(--text)]">Alexandria, Egypt</p>
                </div>
              </div>

              <a className="flex items-center gap-6 group" href="tel:+201274829005">
                <div className="w-16 h-16 border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl group-hover:text-black">phone</span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    Direct Line
                  </p>
                  <p className="font-bold text-xl group-hover:text-[var(--primary)] transition-colors text-[var(--text)]">
                    +20 127 482 9005
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="border border-[var(--border)] p-12 bg-[var(--surface)]/40 relative cyber-card">
            <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-[var(--text-muted)] font-bold">
              ENC_PAYLOAD_V4
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-mono text-[10px] uppercase text-[var(--text-muted)] tracking-[0.2em]">
                    User.Identity
                  </label>
                  <input
                    className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-0 focus:outline-none text-sm py-4 px-4 text-[var(--text)] placeholder:text-[var(--text-muted)]/40"
                    placeholder="NAME"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[10px] uppercase text-[var(--text-muted)] tracking-[0.2em]">
                    User.Email
                  </label>
                  <input
                    className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-0 focus:outline-none text-sm py-4 px-4 text-[var(--text)] placeholder:text-[var(--text-muted)]/40"
                    placeholder="EMAIL_ADDRESS"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)] tracking-[0.2em]">
                  Signal.Message
                </label>
                <textarea
                  className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-0 focus:outline-none text-sm py-4 px-4 text-[var(--text)] placeholder:text-[var(--text-muted)]/40 resize-none"
                  placeholder="TRANSMIT YOUR MESSAGE..."
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--primary)] text-black font-mono text-xs font-black uppercase tracking-[0.3em] py-5 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                Execute Dispatch <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
