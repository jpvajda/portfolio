import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import GenericCard from "./components/GenericCard";
import { competencies } from "./data/competencies";
import { skills } from "./data/skills";
import { certifications } from "./data/certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="John P. Vajda - Developer Experience & Product Led Growth Leader. Portfolio showcasing competencies, technical skills, and certifications in developer relations, PLG, and engineering leadership."
        />
        <meta
          name="keywords"
          content="Developer Relations, Developer Experience, Product Led Growth, PLG, Product Management, Engineering Leadership, JavaScript, TypeScript, Python, API Development"
        />
        <meta name="author" content="John P. Vajda" />
        <meta
          property="og:title"
          content="John P. Vajda - Developer Experience & Product Leader Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio showcasing Developer Relations, Product Led Growth, and Engineering Leadership expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jpvajda.github.io/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="John P. Vajda - Developer Experience & Product Leader"
        />
        <meta
          name="twitter:description"
          content="Portfolio showcasing Developer Relations, Product Led Growth, and Engineering Leadership expertise."
        />
        <link rel="canonical" href="https://jpvajda.github.io/portfolio" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <title>
          John P. Vajda - Developer Experience & Product Leader Portfolio
        </title>
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-terminal-green focus:text-terminal-bg-primary focus:font-mono focus:rounded"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <NavBar></NavBar>
      <main id="main-content">
        <Hero></Hero>

        {/* Core Competencies Section */}
        <section
          id="competencies"
          className="competencies py-8 px-4 md:px-8 lg:px-16"
          aria-labelledby="competencies-heading"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2
                id="competencies-heading"
                className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2"
              >
                /competencies
              </h2>
            </div>

            {/* Competencies Grid - 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competencies.map((competency) => (
                <GenericCard key={competency.id} item={competency} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section
          id="skills"
          className="skills py-8 px-4 md:px-8 lg:px-16 bg-terminal-bg-primary"
          aria-labelledby="skills-heading"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2
                id="skills-heading"
                className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2"
              >
                /skills
              </h2>
            </div>

            {/* Skills Grid - 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <GenericCard key={skill.id} item={skill} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="certifications py-8 px-4 md:px-8 lg:px-16 bg-terminal-bg-primary"
          aria-labelledby="certifications-heading"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2
                id="certifications-heading"
                className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2"
              >
                /certifications
              </h2>
            </div>

            {/* Certifications Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <GenericCard
                  key={cert.id}
                  item={{
                    ...cert,
                    title: `${cert.organization}: ${cert.title}`,
                    icon: "ClipboardDocumentCheckIcon",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
