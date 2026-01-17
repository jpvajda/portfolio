import React from "react";
import { Helmet } from "react-helmet";
import MyCarousel from "./components/MyCarousel";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
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
      <MyCarousel></MyCarousel>
      <section id="projects" className="projects py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/projects
            </h1>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/projects$ ls -la
            </p>
          </div>

          {/* Project Grid - Single column for full width cards */}
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="references"
        className="references py-16 px-4 md:px-8 lg:px-16 bg-terminal-bg-primary"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/links
            </h1>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/links$ ls -la
            </p>
          </div>

          {/* References Grid - Single column for full width cards */}
          <div className="grid grid-cols-1 gap-6">
            {references.map((reference) => (
              <ProjectCard key={reference.id} project={reference} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="certifications py-16 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/certifications
            </h1>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/certifications$ ls -la
            </p>
          </div>

          {/* Certifications Grid - Single column for full width cards */}
          <div className="grid grid-cols-1 gap-6">
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
