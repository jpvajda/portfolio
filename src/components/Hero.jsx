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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-terminal-text-primary font-mono">
          &gt; John P. Vajda
        </h1>

        {/* Title/Role */}
        <p className="text-xl md:text-2xl lg:text-3xl text-terminal-green font-mono">
          [ Developer Experience • Product Led Growth • Product Leader ]
        </p>

        {/* Bio */}
        <div className="space-y-6 mt-8">
          <p className="text-base md:text-lg text-terminal-text-secondary font-mono max-w-2xl mx-auto">
            Hey there! 👋 I' m an entrepreneur, startup veteran, product
            manager, and developer who thrives at the intersection of code and
            community. I've worn many hats: launched my own products, taken
            ideas from 0 to 1, and rolled up my sleeves as a hands-on engineer.
            My sweet spot? Developer Relations, Developer Experience, and
            building products developers actually{" "}
            <span className="text-terminal-green">❤️</span> to use.
          </p>
          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="mt-8 inline-block px-8 py-3 bg-transparent font-mono text-sm md:text-base font-bold rounded terminal-button-glow hover:bg-terminal-green hover:text-terminal-bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
            style={{ border: "3px solid #7FFF00", color: "#7FFF00" }}
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
