import MyModal from "./MyModal";

/**
 * Hero Component - Terminal-themed hero section
 * Simple text display with terminal aesthetic
 */
const Hero = () => {
  return (
    <section
      className="hero py-16 flex items-center justify-center px-4 md:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name */}
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-terminal-text-primary font-mono"
        >
          John P. Vajda
        </h1>

        {/* Title/Role */}
        <p className="text-xl md:text-2xl lg:text-3xl text-terminal-green font-mono">
          [ Developer Experience • Product Led Growth • Product Leader ]
        </p>

        {/* Bio */}
        <div className="space-y-6 mt-8">
          <p className="text-base md:text-lg text-terminal-text-secondary font-mono max-w-2xl mx-auto">
            Hey there! 👋  I'm a 0→1 builder with 14 years in Product, Developer Relations, and PLG growth, plus 10 years hands-on as an engineer. I've scaled APIs from hundreds to millions of requests, grown open-source communities from the ground up, and built the product and developer experience early-stage companies need from day one.
          </p>
          {/* Contact Button */}
          <div className="mt-4">
            <MyModal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
