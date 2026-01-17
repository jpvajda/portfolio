import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import { competencies } from "./data/competencies";
import { skills } from "./data/skills";
import { references } from "./data/references";
import { certifications } from "./data/certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>John P Vajda: Portfolio</title>
        <link
          rel="canonical"
          href="http://localhost:3000/jpvajda/jpvajda-react.github.io"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {/* new relic script for data tracking */}
        <script src="newrelic.js"></script>
      </Helmet>
      <NavBar></NavBar>
      <Hero></Hero>
      
      {/* Core Competencies Section */}
      <section id="competencies" className="competencies py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/competencies
            </h2>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/competencies$ ls -la
            </p>
          </div>

          {/* Competencies Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((competency) => (
              <SkillCard key={competency.id} item={competency} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="skills py-8 px-4 md:px-8 lg:px-16 bg-terminal-bg-primary">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/skills
            </h2>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/skills$ ls -la
            </p>
          </div>

          {/* Skills Grid - 5 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} item={skill} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="references"
        className="references py-8 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/links
            </h2>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/links$ ls -la
            </p>
          </div>

          {/* References Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {references.map((reference) => (
              <ProjectCard key={reference.id} project={reference} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="certifications py-8 px-4 md:px-8 lg:px-16 bg-terminal-bg-primary"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/certifications
            </h2>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/certifications$ ls -la
            </p>
          </div>

          {/* Certifications Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <ProjectCard
                key={cert.id}
                project={{
                  ...cert,
                  title: `${cert.organization}: ${cert.title}`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default App;
