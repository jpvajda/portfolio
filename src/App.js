import './App.scss';
import React from "react";
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyCarousel from './components/MyCarousel';
import codeImage from './assets/code-image.png'


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
      <MyCarousel></MyCarousel>
      <section className="projects">
        <h1 className="projectTitle">Projects</h1>
        <Card className="card">
          <Card.Img variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC: Tribute Page</Card.Title>
            <Card.Text className="cardText">
              A aimple HTML page using basic CSS.
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/eYYrOJe">CodePen</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Survey Form</Card.Title>
            <Card.Text className="cardText">
              A aimple survey form.
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/BaaxybB">CodePen</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" src={codeImage} />
          <Card.Body>
            <Card.Title className="cardTitle">FCC:Product Landing</Card.Title>
            <Card.Text className="cardText">
              A simple landing page.
    </Card.Text>
            <Button variant="primary" href="https://codepen.io/jpvajda/pen/GRRdwXv">CodePen</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default App;
