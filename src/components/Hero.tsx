import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const titles = [
    "Software Engineer",
    "Frontend Developer",
    "Senior Electronics & Communication Engineering Student",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        // Finished typing, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
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
        // Finished erasing, move to next title
        const timeout = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentTitleIndex, charIndex, isTyping, titles]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Spark-like 3D Background Effects */}
      <div className="absolute inset-0 opacity-60">
        {/* Main Spark Clusters */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full animate-spark-float-1 shadow-lg"
          style={{
            transform: `translate3d(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px, 0)`,
          }}
        ></div>

        <div
          className="absolute top-40 right-20 w-3 h-3 bg-blue-600 dark:bg-blue-300 rounded-full animate-spark-float-2 shadow-md"
          style={{
            transform: `translate3d(${mousePosition.x * -0.04}px, ${
              mousePosition.y * 0.04
            }px, 0)`,
          }}
        ></div>

        <div
          className="absolute bottom-20 left-1/2 w-5 h-5 bg-blue-400 dark:bg-blue-500 rounded-full animate-spark-float-3 shadow-lg"
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${
              mousePosition.y * -0.03
            }px, 0)`,
          }}
        ></div>

        {/* Spark Trails */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-8 bg-blue-500 dark:bg-blue-400 opacity-70 animate-spark-trail transform-gpu"
          style={{
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            transform: `translate3d(${mousePosition.x * 0.06}px, ${
              mousePosition.y * 0.06
            }px, 0) rotateZ(45deg)`,
          }}
        ></div>

        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-6 bg-blue-600 dark:bg-blue-300 opacity-60 animate-spark-burst transform-gpu"
          style={{
            borderRadius: "50% 50% 50% 50% / 80% 80% 20% 20%",
            transform: `translate3d(${mousePosition.x * -0.05}px, ${
              mousePosition.y * -0.05
            }px, 0) rotateZ(-30deg)`,
          }}
        ></div>

        {/* Spark Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full opacity-40 ${
                i % 3 === 0
                  ? "animate-spark-zigzag"
                  : i % 3 === 1
                  ? "animate-spark-trail"
                  : "animate-spark-burst"
              }`}
              style={{
                left: `${5 + i * 4.5}%`,
                top: `${10 + i * 4}%`,
                animationDelay: `${i * 0.3}s`,
                transform: `translate3d(${
                  mousePosition.x * (0.02 + i * 0.001)
                }px, ${mousePosition.y * (0.02 + i * 0.001)}px, 0)`,
              }}
            ></div>
          ))}
        </div>

        {/* Additional Spark Effects */}
        <div
          className="absolute top-1/3 left-1/3 w-1 h-4 bg-blue-400 dark:bg-blue-500 opacity-50 animate-spark-trail"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-600 dark:bg-blue-300 rounded-full opacity-60 animate-spark-burst"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/5 w-1 h-3 bg-blue-500 dark:bg-blue-400 opacity-40 animate-spark-zigzag"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-teal-700 to-blue-700 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            I'm Tarek Mohamed Salah
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-4xl text-gray-600 dark:text-gray-300 mb-6 font-medium h-16 flex items-center justify-center">
            <span className="inline-block min-w-0">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-teal-500 ml-1 animate-pulse"></span>
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting responsive interfaces and solving problems with code.
            Passionate about creating seamless user experiences through
            innovative technology solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <a
              href="/Tarek Mohamed Salah.pdf"
              download="Tarek Mohamed Salah.pdf"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>

            <button
              onClick={scrollToContact}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
