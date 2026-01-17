import "./App.scss";
import React from "react";
import { Helmet } from "react-helmet";
import MyCarousel from "./components/MyCarousel";
import NavBar from "./components/NavBar";
import codeImage from "./assets/code-image.png";
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
      <section id="projects" className="projects">
        <h1 className="projectTitle">Projects</h1>
        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Tribute Page</h3>
            <p className="cardText">
              A simple HTML {"&"} CSS page
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/eYYrOJe"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Survey Form</h3>
            <p className="cardText">A simple survey form</p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/BaaxybB"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Product Landing</h3>
            <p className="cardText">A simple landing page</p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/GRRdwXv"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Technical Documentation
            </h3>
            <p className="cardText">
              A simple documentation page
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/xxxjoVN"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Quote Machine </h3>
            <p className="cardText">
              A simple quote application
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/ExaxeYL"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Markdown Previewer{" "}
            </h3>
            <p className="cardText">
              A simple markdown application
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/wvBaWBx"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Drum Machine </h3>
            <p className="cardText">
              A drum machine application
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/LYEpLvj"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">FCC:Pomodoro Clock </h3>
            <p className="cardText">
              A pomodoro clock application
            </p>
            <a
              className="btn-primary"
              href="https://codepen.io/jpvajda/pen/zYxKpbG"
            >
              CodePen
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:API and Microservice Projects{" "}
            </h3>
            <p className="cardText">An API project</p>
            <a className="btn-primary" href="https://glitch.com/@jpvajda">
              Glitch
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Information Security and QA Projects{" "}
            </h3>
            <p className="cardText">
              A QA and security project
            </p>
            <a className="btn-primary" href="https://glitch.com/@jpvajda">
              Glitch
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">Python Games </h3>
            <p className="cardText">
              Simple games built with Python
            </p>
            <a
              className="btn-primary"
              href="https://github.com/jpvajda/python/tree/master/PythonGames"
            >
              Github
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              Netlify Lambda Function{" "}
            </h3>
            <p className="cardText">
              An example Lambda function on Netlify
            </p>
            <a
              className="btn-primary"
              href="https://jpvajda-github-io.netlify.com/.netlify/functions/lambdafunction"
            >
              Netlify
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Rock Paper Scissors{" "}
            </h3>
            <p className="cardText">
              A Machine Learning Python project
            </p>
            <a
              className="btn-primary"
              href="https://replit.com/@jpvajda/boilerplate-rock-paper-scissors?v=1"
            >
              Replit
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Cat & Dog Image Classifier{" "}
            </h3>
            <p className="cardText">
              A Machine Learning Python project
            </p>
            <a
              className="btn-primary"
              href="https://colab.research.google.com/drive/11EF3V2zNub6jC_WekcJuVWNpCRSRuL4e#scrollTo=4IH86Ux_u7TZ"
            >
              Google Colab
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Book Recommendation Engine using KNN{" "}
            </h3>
            <p className="cardText">
              A Machine Learning Python project
            </p>
            <a
              className="btn-primary"
              href="https://colab.research.google.com/drive/12Zh-5yafVJsjj2VWEpcJ4FSxh3pAnBJl"
            >
              Google Colab
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Linear Regression Health Costs Calculator{" "}
            </h3>
            <p className="cardText">
              A Machine Learning Python project
            </p>
            <a
              className="btn-primary"
              href="https://colab.research.google.com/drive/18RGW7HsoW-D0AgF-2QFB-FfxfpzIieVr#scrollTo=Xe7RXH3N3CWU"
            >
              Google Colab
            </a>
          </div>
        </div>

        <div className="card terminal-window">
          <img className="codeImage" src={codeImage} alt="Code" />
          <div className="card-body">
            <h3 className="cardTitle">
              FCC:Neural Network SMS Text Classifier{" "}
            </h3>
            <p className="cardText">
              A Machine Learning Python project
            </p>
            <a
              className="btn-primary"
              href="https://colab.research.google.com/drive/1PCilUlclc3SYDCbLa3aF4l9EdNvwzUPJ#scrollTo=Dxotov85SjsC"
            >
              Google Colab
            </a>
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
            <p className="cardText">
              JS Algorithms {"&"} Data Structures
            </p>
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
            <p className="cardText">
              Information Security {"&"} QA
            </p>
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
            <p className="cardText">
              Machine Learning with Python
            </p>
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
            <p className="cardText">
              Graph Developer Associate
            </p>
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
            <p className="cardText">
              Graph Developer Professional
            </p>
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
