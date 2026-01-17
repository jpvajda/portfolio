/**
 * Hero Component - Terminal-themed hero section
 * Simple text display with terminal aesthetic
 */
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-terminal-text-primary font-mono">
          &gt; John P. Vajda
        </h1>

        {/* Title/Role */}
        <p className="text-xl md:text-2xl lg:text-3xl text-terminal-green font-mono">
          [ Developer Experience • Product Led Growth • Engineering Leader ]
        </p>

        {/* Bio */}
        <div className="space-y-6 mt-8">
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
            className="mt-8 inline-block px-6 py-3 bg-transparent border-2 border-terminal-green text-terminal-green font-mono text-sm md:text-base rounded hover:bg-terminal-green hover:text-terminal-bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
            aria-label="View my projects"
          >
            &gt; view_projects()
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
