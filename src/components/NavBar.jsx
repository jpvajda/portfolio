// TODO Phase 5: Replace with proper navigation using Headless UI

function NavBar() {
  return (
    <nav className="navbar terminal-window flex justify-between items-center">
      <a href="#name" className="navbar-brand terminal-text text-2xl font-bold">
        John P. Vajda
      </a>
      <div className="nav-links flex gap-4">
        <a
          className="navLink terminal-text hover:text-terminal-green-dim"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="navLink terminal-text hover:text-terminal-green-dim"
          href="#references"
        >
          References
        </a>
        <a
          className="navLink terminal-text hover:text-terminal-green-dim"
          href="#certifications"
        >
          Certifications
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
