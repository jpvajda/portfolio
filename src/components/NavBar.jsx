import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="navbar sticky top-0 z-40 border-b border-white/10 bg-terminal-bg-secondary/85 backdrop-blur-md px-4 py-3 md:px-8"
      aria-label="Main navigation"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            <span className="navbar-brand terminal-text text-2xl font-bold">
              &gt; John P. Vajda
              <span className="terminal-cursor" aria-hidden="true">
                _
              </span>
            </span>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center gap-6"
              aria-label="Desktop navigation links"
            >
              <a
                className="navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
                href="#competencies"
                aria-label="Navigate to Core Competencies section"
              >
                [Competencies]
              </a>
              <a
                className="navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
                href="#skills"
                aria-label="Navigate to Technical Skills section"
              >
                [Skills]
              </a>
              <a
                className="navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
                href="#certifications"
                aria-label="Navigate to Certifications section"
              >
                [Certifications]
              </a>
            </div>

            {/* Mobile Menu Button */}
            <DisclosureButton
              className="md:hidden font-mono text-terminal-green hover:text-terminal-green-dim focus:outline-none focus:ring-2 focus:ring-terminal-green rounded-sm"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              {open ? (
                <span className="text-2xl" aria-hidden="true">
                  ×
                </span>
              ) : (
                <span className="text-xl" aria-hidden="true">
                  ☰
                </span>
              )}
            </DisclosureButton>
          </div>

          {/* Mobile Navigation */}
          <DisclosurePanel
            className="md:hidden mt-4 space-y-2"
            aria-label="Mobile navigation menu"
          >
            <a
              className="block navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
              href="#competencies"
              aria-label="Navigate to Core Competencies section"
            >
              &gt; Competencies
            </a>
            <a
              className="block navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
              href="#skills"
              aria-label="Navigate to Technical Skills section"
            >
              &gt; Skills
            </a>
            <a
              className="block navLink font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
              href="#certifications"
              aria-label="Navigate to Certifications section"
            >
              &gt; Certifications
            </a>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
