import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";
import MyCarousel from "./components/MyCarousel";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import linkImage from "./assets/link-image.png";
import certImage from "./assets/certification-image.png";
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
      <section id="projects" className="projects py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-text-primary font-mono mb-2">
              &gt; cd ~/projects
            </h1>
            <p className="text-terminal-text-secondary font-mono text-sm">
              john@portfolio:~/projects$ ls -la
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="references" className="references">
        <h1 className="referencesTitle">References</h1>

        <div className="card terminal-window">
          <img className="linkImage" src={linkImage} alt="Link" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">My FCC profile</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/jpvajda"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="linkImage" src={linkImage} alt="Link" />
          <div className="card-body">
            <h3 className="cardTitle">Github</h3>
            <p className="cardText">My Github profile</p>
            <a className="btn-primary" href="https://github.com/jpvajda">
              Github
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="linkImage" src={linkImage} alt="Link" />
          <div className="card-body">
            <h3 className="cardTitle">CodeWars</h3>
            <p className="cardText">My Codewars profile</p>
            <a
              className="btn-primary"
              href="https://www.codewars.com/users/kratos0"
            >
              Codewars
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="linkImage" src={linkImage} alt="Link" />
          <div className="card-body">
            <h3 className="cardTitle">Linkedin</h3>
            <p className="cardText">My Linkedin profile</p>
            <a
              className="btn-primary"
              href="https://www.linkedin.com/in/johnpvajda"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="linkImage" src={linkImage} alt="Link" />
          <div className="card-body">
            <h3 className="cardTitle">Glitch</h3>
            <p className="cardText">My Glitch profile</p>
            <a className="btn-primary" href="https://glitch.com/@jpvajda">
              Glitch
            </a>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h1 className="certificationTitle">Certifications</h1>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">Responsive Web Design</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/certification/jpvajda/responsive-web-design"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">JS Algorithms {"&"} Data Structures</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/certification/jpvajda/javascript-algorithms-and-data-structures"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">Front End Libraries</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/certification/jpvajda/front-end-libraries"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">APIs {"&"} Microservices</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/certification/jpvajda/apis-and-microservices"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">Information Security {"&"} QA</p>
            <a
              className="btn-primary"
              href="https://www.apollographql.com/tutorials/certifications/36cf87f9-de45-492e-bad1-b16de96eb78e"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Free Code Camp</h3>
            <p className="cardText">Machine Learning with Python</p>
            <a
              className="btn-primary"
              href="https://www.freecodecamp.org/certification/jpvajda/machine-learning-with-python-v7"
            >
              FCC
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Apollo GraphQL</h3>
            <p className="cardText">Graph Developer Associate</p>
            <a
              className="btn-primary"
              href="https://www.apollographql.com/tutorials/certifications/36cf87f9-de45-492e-bad1-b16de96eb78e"
            >
              GraphQL
            </a>
          </div>
        </div>
        <div className="card terminal-window">
          <img className="certImage" src={certImage} alt="Certification" />
          <div className="card-body">
            <h3 className="cardTitle">Apollo GraphQL</h3>
            <p className="cardText">Graph Developer Professional</p>
            <a
              className="btn-primary"
              href="https://www.apollographql.com/tutorials/certifications/e0aa779b-763a-4aeb-a8ff-44ebf139db79"
            >
              GraphQL
            </a>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default App;
