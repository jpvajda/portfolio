import React from "react";
import PropTypes from "prop-types";
import * as HeroIcons from "@heroicons/react/24/outline";

/**
 * SkillCard - Terminal window styled skill/competency card
 *
 * Displays skills and competencies with:
 * - macOS window chrome (red, yellow, green dots)
 * - Heroicon for visual representation
 * - Terminal aesthetic
 * - Hover effects
 */
const SkillCard = ({ item }) => {
  const { title, description, icon } = item;
  
  // Dynamically get the icon component from heroicons
  const IconComponent = HeroIcons[icon] || HeroIcons.CommandLineIcon;

  return (
    <article
      className="group relative bg-terminal-bg-secondary border border-terminal-bg-tertiary rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-terminal-glow"
      aria-label={`${title} skill`}
    >
      {/* macOS Window Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg-tertiary border-b border-terminal-bg-tertiary">
        <div className="flex gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ff5555" }}
            aria-hidden="true"
            title="Close"
          ></span>
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ffff55" }}
            aria-hidden="true"
            title="Minimize"
          ></span>
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#7FFF00" }}
            aria-hidden="true"
            title="Maximize"
          ></span>
        </div>
        <span className="text-xs text-terminal-text-tertiary font-mono ml-2">
          ~/skills/{title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <IconComponent 
            className="w-12 h-12 text-terminal-green opacity-80 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-terminal-text-primary mb-3 font-mono text-center">
          &gt; {title}
        </h3>

        {/* Description */}
        <p className="text-terminal-text-secondary text-sm text-center">
          {description}
        </p>
      </div>
    </article>
  );
};

SkillCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default SkillCard;
