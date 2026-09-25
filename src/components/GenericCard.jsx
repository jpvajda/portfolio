import React from "react";
import PropTypes from "prop-types";
import * as HeroIcons from "@heroicons/react/24/outline";

const GenericCard = ({ item }) => {
  const { title, description, icon, link, linkText, category, organization } =
    item;

  const IconComponent = HeroIcons[icon] || HeroIcons.CommandLineIcon;
  const label = category || organization;

  return (
    <article
      className="panel group relative h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-terminal-green/40"
      aria-label={title}
    >
      <div className="flex items-center gap-2.5 px-5 py-3 border-b border-white/10 text-terminal-green">
        <span
          className="card-window-dots flex shrink-0 items-center gap-1"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-[2px] border border-current bg-current" />
          <span className="h-2.5 w-2.5 rounded-[2px] border border-current bg-current" />
          <span className="h-2.5 w-2.5 rounded-[2px] border border-current bg-current" />
        </span>
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-terminal-green">
            {label}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <IconComponent
          className="w-8 h-8 text-terminal-green mb-4 opacity-90 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        <h3 className="text-lg font-semibold text-terminal-text-primary mb-2 font-sans leading-snug">
          {title}
        </h3>

        <p className="text-terminal-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>

        {link && linkText && (
          <div className="mt-auto pt-2">
            <a
              href={link}
              className="accent-button"
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
    organization: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};

export default GenericCard;
