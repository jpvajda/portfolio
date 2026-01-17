import React from "react";
import PropTypes from "prop-types";
import codeImage from "../assets/code-image.png";

/**
 * ProjectCard - Terminal window styled project card
 *
 * Displays project information in a terminal window aesthetic with:
 * - macOS window chrome (red, yellow, green dots)
 * - File path notation header
 * - Technology tags with bracket notation
 * - Hover effects (lift + glow)
 * - Terminal cursor effect
 */
const ProjectCard = ({ project }) => {
  const { title, description, link, linkText, path, tags } = project;

  return (
    <article
      className="group relative bg-terminal-bg-secondary border border-terminal-bg-tertiary rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-terminal-glow"
      aria-label={`${title} project`}
    >
      {/* macOS Window Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg-tertiary border-b border-terminal-bg-tertiary">
        <div className="flex gap-2">
          <span
            className="w-3 h-3 rounded-full bg-terminal-red"
            aria-hidden="true"
            title="Close"
          ></span>
          <span
            className="w-3 h-3 rounded-full bg-terminal-yellow"
            aria-hidden="true"
            title="Minimize"
          ></span>
          <span
            className="w-3 h-3 rounded-full bg-terminal-green"
            aria-hidden="true"
            title="Maximize"
          ></span>
        </div>
        <span className="text-xs text-terminal-text-tertiary font-mono ml-2">
          {path}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Project Image */}
        <div className="flex justify-center mb-4">
          <img
            className="w-24 h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            src={codeImage}
            alt={`${title} icon`}
            loading="lazy"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-terminal-text-primary mb-3 font-mono">
          &gt; {title}
        </h3>

        {/* Project Description */}
        <p className="text-terminal-text-secondary mb-4 text-sm">
          {description}
        </p>

        {/* Technology Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4" role="list">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green hover:text-terminal-bg-primary transition-colors"
                role="listitem"
              >
                [{tag}]
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={link}
          className="inline-block px-4 py-2 bg-transparent border border-terminal-green text-terminal-green font-mono text-sm rounded hover:bg-terminal-green hover:text-terminal-bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on ${linkText}`}
        >
          &gt; {linkText}
        </a>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
