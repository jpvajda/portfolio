import { useState, useEffect } from "react";

/**
 * Hero Component - Terminal-themed hero section
 * 
 * Features:
 * - Terminal loading animation
 * - Typing effect for name and title
 * - Full viewport height
 * - Terminal cursor effect
 * - Smooth scroll CTA
 */
const Hero = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    // Loading animation sequence
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setShowName(true);
    }, 1500);

    const nameTimer = setTimeout(() => {
      setShowTitle(true);
    }, 2500);

    const titleTimer = setTimeout(() => {
      setShowBio(true);
    }, 3500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(nameTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero min-h-screen flex items-center justify-center px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal Loading Animation */}
        {showLoading && (
          <div className="terminal-loading animate-pulse">
            <p className="text-terminal-green font-mono text-lg md:text-xl mb-2">
              &gt; initializing portfolio...
            </p>
            <div className="flex justify-center gap-1 mt-4">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
            </div>
          </div>
        )}

        {/* Main Content */}
        {!showLoading && (
          <div className="space-y-8">
            {/* Name with typing effect */}
            {showName && (
              <div className="opacity-0 animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-terminal-text-primary font-mono mb-4">
                  &gt; John P. Vajda
                  <span className="terminal-cursor-blink text-terminal-green">_</span>
                </h1>
              </div>
            )}

            {/* Title/Role */}
            {showTitle && (
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-xl md:text-2xl lg:text-3xl text-terminal-green font-mono">
                  [ Developer Experience • Product Led Growth • Engineering Leader ]
                </p>
              </div>
            )}

            {/* Bio */}
            {showBio && (
              <div className="opacity-0 animate-fade-in space-y-6 mt-8" style={{ animationDelay: "0.4s" }}>
                <p className="text-base md:text-lg text-terminal-text-secondary font-mono max-w-2xl mx-auto">
                  I am an impact driven product led growth leader focused on building amazing Developer Experience.
                </p>

                <p className="text-sm md:text-base text-terminal-text-tertiary font-mono max-w-3xl mx-auto">
                  I thrive on empowering developers to build amazing things. When you can provide developers clear and concise documentation, 
                  a healthy and vibrant community, supportive open source libraries, and a seamless developer experience, 
                  they can do incredible things with your software.
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToProjects}
                  className="mt-8 inline-block px-6 py-3 bg-transparent border-2 border-terminal-green text-terminal-green font-mono text-sm md:text-base rounded hover:bg-terminal-green hover:text-terminal-bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary group"
                  aria-label="View my projects"
                >
                  <span className="flex items-center gap-2">
                    &gt; view_projects()
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Scroll indicator */}
        {showBio && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col items-center gap-2 text-terminal-text-tertiary">
              <span className="text-xs font-mono">scroll</span>
              <div className="w-px h-8 bg-terminal-green animate-bounce"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
