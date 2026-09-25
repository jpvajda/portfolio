import React from "react";
import MyModal from "./MyModal";
import { references } from "../data/references";

function Footer() {
  return (
    <footer
      className="footer py-8 px-4 md:px-8 lg:px-16 border-t border-white/10 bg-terminal-bg-secondary"
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {references.map((reference) => (
            <a
              key={reference.id}
              href={reference.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-terminal-text-secondary hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
              aria-label={`Visit ${reference.title}`}
            >
              [{reference.title}]
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-terminal-text-tertiary text-sm font-mono">
          John P. Vajda 2026-27
        </p>
      </div>
    </footer>
  );
}
export default Footer;
