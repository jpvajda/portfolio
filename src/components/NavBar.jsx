import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ModeToggle from "./ModeToggle";

function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="navbar terminal-window"
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
              role="navigation"
              aria-label="Main navigation links"
            >
              <a
                className="navLink terminal-text hover:text-terminal-green transition-colors"
                href="#competencies"
                aria-label="Navigate to Core Competencies section"
              >
                [Competencies]
              </a>
              <a
                className="navLink terminal-text hover:text-terminal-green transition-colors"
                href="#skills"
                aria-label="Navigate to Technical Skills section"
              >
                [Skills]
              </a>
              <a
                className="navLink terminal-text hover:text-terminal-green transition-colors"
                href="#certifications"
                aria-label="Navigate to Certifications section"
              >
                [Certifications]
              </a>
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <DisclosureButton
              className="md:hidden text-terminal-green hover:text-terminal-green-dim focus:outline-none focus:ring-2 focus:ring-terminal-green"
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
              className="block navLink terminal-text hover:text-terminal-green transition-colors py-2"
              href="#competencies"
              aria-label="Navigate to Core Competencies section"
            >
              &gt; Competencies
            </a>
            <a
              className="block navLink terminal-text hover:text-terminal-green transition-colors py-2"
              href="#skills"
              aria-label="Navigate to Technical Skills section"
            >
              &gt; Skills
            </a>
            <a
              className="block navLink terminal-text hover:text-terminal-green transition-colors py-2"
              href="#certifications"
              aria-label="Navigate to Certifications section"
            >
              &gt; Certifications
            </a>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
