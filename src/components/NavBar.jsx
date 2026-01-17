import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import ModeToggle from "./ModeToggle";

function NavBar() {
  return (
    <Disclosure as="nav" className="navbar terminal-window">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            <a href="#name" className="navbar-brand terminal-text text-2xl font-bold hover:text-terminal-green-dim transition-colors">
              &gt; John P. Vajda<span className="terminal-cursor">_</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a className="navLink terminal-text hover:text-terminal-green transition-colors" href="#projects">
                [Projects]
              </a>
              <a className="navLink terminal-text hover:text-terminal-green transition-colors" href="#references">
                [References]
              </a>
              <a className="navLink terminal-text hover:text-terminal-green transition-colors" href="#certifications">
                [Certifications]
              </a>
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <DisclosureButton className="md:hidden text-terminal-green hover:text-terminal-green-dim focus:outline-none focus:ring-2 focus:ring-terminal-green">
              <span className="sr-only">Open menu</span>
              {open ? (
                <span className="text-2xl">×</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </DisclosureButton>
          </div>

          {/* Mobile Navigation */}
          <DisclosurePanel className="md:hidden mt-4 space-y-2">
            <a className="block navLink terminal-text hover:text-terminal-green transition-colors py-2" href="#projects">
              &gt; Projects
            </a>
            <a className="block navLink terminal-text hover:text-terminal-green transition-colors py-2" href="#references">
              &gt; References
            </a>
            <a className="block navLink terminal-text hover:text-terminal-green transition-colors py-2" href="#certifications">
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
