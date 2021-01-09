import './App.scss';
import React from "react";
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ControlledCarousel from './components/ControlledCarousel';


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
      <ControlledCarousel.js></ControlledCarousel.js>
      <section className="projects">
        <h1 className="project-title">Projects</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default App;
