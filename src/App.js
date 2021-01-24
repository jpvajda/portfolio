import './App.scss';
import React from "react";
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyCarousel from './components/MyCarousel';
import NavBar from './components/NavBar';
import codeImage from './assets/code-image.png';
import linkImage from './assets/link-image.png';
import certImage from './assets/certification-image.png'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>John P Vajda: Portfolio</title>
        <link rel="canonical" href="http://localhost:3000/jpvajda/jpvajda-react.github.io" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet" />
        {/* new relic script for data tracking */}
        <script src="newrelic.js"></script>
      </Helmet>
      <NavBar></NavBar>
      <MyCarousel></MyCarousel>
      <section className="projects">
        <h1 className="projectTitle">Projects</h1>
        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Tribute Page</Card.Title>
            <Card.Text className="cardText">
              A simple HTML {'&'} CSS page
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/eYYrOJe">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Survey Form</Card.Title>
            <Card.Text className="cardText">
              A simple survey form
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/BaaxybB">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Product Landing</Card.Title>
            <Card.Text className="cardText">
              A simple landing page
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/GRRdwXv">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Technical Documentation</Card.Title>
            <Card.Text className="cardText">
              A simple documentation page
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/xxxjoVN">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Quote Machine </Card.Title>
            <Card.Text className="cardText">
              A simple quote application
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/ExaxeYL">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Markdown Previewer </Card.Title>
            <Card.Text className="cardText">
              A simple markdown application
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/wvBaWBx">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Drum Machine </Card.Title>
            <Card.Text className="cardText">
              A drum machine application
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/LYEpLvj">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Pomodoro Clock </Card.Title>
            <Card.Text className="cardText">
              A pomodoro clock application
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/zYxKpbG">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:API and Microservice Projects  </Card.Title>
            <Card.Text className="cardText">
              An API project
    </Card.Text>
            <Button variant="primary" href="https://glitch.com/@jpvajda">Glitch</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Information Security and QA Projects </Card.Title>
            <Card.Text className="cardText">
              A QA and security project
    </Card.Text>
            <Button variant="primary" href="https://glitch.com/@jpvajda">Glitch</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Python Games </Card.Title>
            <Card.Text className="cardText">
              Simple games built with Python
    </Card.Text>
            <Button variant="primary" href="https://github.com/jpvajda/python/tree/master/PythonGames">Github</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="codeImage" variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Netlify Lambda Function </Card.Title>
            <Card.Text className="cardText">
              An example Lambda function on Netlify
    </Card.Text>
            <Button variant="primary" href="https://jpvajda-github-io.netlify.com/.netlify/functions/lambdafunction">Netlify</Button>
          </Card.Body>
        </Card>
      </section>

      <section className="references">
        <h1 className="referencesTitle">References</h1>

        <Card className="card">
          <Card.Img className="linkImage" variant="top" src={linkImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              My FCC profile
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/jpvajda">FCC</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="linkImage" variant="top" src={linkImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Github</Card.Title>
            <Card.Text className="cardText">
              My Github profile
    </Card.Text>
            <Button variant="primary" href="https://github.com/jpvajda">Github</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="linkImage" variant="top" src={linkImage} />
          <Card.Body>
            <Card.Title className="cardTitle">CodeWars</Card.Title>
            <Card.Text className="cardText">
              My Codewars profile
    </Card.Text>
            <Button variant="primary" href="https://www.codewars.com/users/kratos0">Codewars</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="linkImage" variant="top" src={linkImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Linkedin</Card.Title>
            <Card.Text className="cardText">
              My Linkedin profile
    </Card.Text>
            <Button variant="primary" href="https://www.linkedin.com/in/johnpvajda">Linkedin</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="linkImage" variant="top" src={linkImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Glitch</Card.Title>
            <Card.Text className="cardText">
              My Glitch profile
    </Card.Text>
            <Button variant="primary" href="https://glitch.com/@jpvajda">Glitch</Button>
          </Card.Body>
        </Card>
      </section>

      <section className="certifications">
        <h1 className="certificationTitle">Certifications</h1>

        <Card className="card">
          <Card.Img className="certImage" variant="top" src={certImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              Responsive Web Design
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/certification/jpvajda/responsive-web-design">FCC</Button>
          </Card.Body>
        </Card>


        <Card className="card">
          <Card.Img className="certImage" variant="top" src={certImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              JS Algorithms {'&'} Data Structures
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/certification/jpvajda/javascript-algorithms-and-data-structures">FCC</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="certImage" variant="top" src={certImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              Front End Libraries
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/certification/jpvajda/front-end-libraries">FCC</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="certImage" variant="top" src={certImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              APIs {'&'} Microservices
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/certification/jpvajda/apis-and-microservices">FCC</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img className="certImage" variant="top" src={certImage} />
          <Card.Body>
            <Card.Title className="cardTitle">Free Code Camp</Card.Title>
            <Card.Text className="cardText">
              Information Security {'&'} QA
    </Card.Text>
            <Button variant="primary" href="https://www.freecodecamp.org/certification/jpvajda/information-security-and-quality-assurance">FCC</Button>
          </Card.Body>
        </Card>
      </section>

    </div >
  );
}

export default App;
