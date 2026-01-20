import React from "react";
import { companies } from "../data/companies";
import * as HeroIcons from "@heroicons/react/24/outline";

const WorkMarquee = () => {
  // Duplicate companies array for seamless infinite scrolling
  // Two copies allow the animation to loop seamlessly when moving -50%
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section
      className="work-marquee py-4 bg-terminal-bg-secondary border-b border-terminal-bg-tertiary"
      aria-label="Work experience companies"
    >
      <div className="w-full px-4 md:px-8 lg:px-16">
        {/* Scrolling Marquee */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll-marquee whitespace-nowrap gap-0">
            {duplicatedCompanies.map((company, index) => {
              const IconComponent =
                HeroIcons[company.icon] || HeroIcons.BuildingOffice2Icon;
              return (
                <div
                  key={`${company.id}-${index}`}
                  className="flex items-center gap-3 px-8 flex-shrink-0"
                >
                  <IconComponent
                    className="w-5 h-5 text-terminal-green flex-shrink-0"
                    style={{ color: '#7FFF00' }}
                    aria-hidden="true"
                  />
                  <span className="text-terminal-green font-mono text-lg whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkMarquee;
