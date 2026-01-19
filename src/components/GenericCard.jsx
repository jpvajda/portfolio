import React from "react";
import PropTypes from "prop-types";
import * as HeroIcons from "@heroicons/react/24/outline";

const GenericCard = ({ item }) => {
  const { title, description, icon, link, linkText } = item;

  // Dynamically get the icon component from heroicons
  const IconComponent = HeroIcons[icon] || HeroIcons.CommandLineIcon;

  return (
    <article
      className="group relative bg-terminal-bg-secondary border border-terminal-bg-tertiary rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-terminal-glow-subtle"
      aria-label={title}
    >
      {/* macOS Window Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg-tertiary border-b border-terminal-bg-tertiary overflow-hidden rounded-t-lg">
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
          {title}
        </h3>

        {/* Description */}
        <p className="text-terminal-text-secondary text-sm text-center mb-4">
          {description}
        </p>

        {/* Optional CTA Button */}
        {link && linkText && (
          <div className="flex justify-center mt-4">
            <a
              href={link}
              className="inline-block px-5 py-2.5 bg-transparent font-mono text-sm font-bold rounded terminal-button-glow hover:bg-terminal-green hover:text-terminal-bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
              style={{ border: "3px solid #7FFF00", color: "#7FFF00" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} ${linkText}`}
            >
              {linkText}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

GenericCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    category: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};

export default GenericCard;
