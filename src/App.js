import './App.scss';
import React from "react";
import {Helmet} from "react-helmet"

function App() {
  return (
    <div className="App"> 
            <Helmet>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <title>John P Vajda: Portfolio</title>
                <link rel="canonical" href="http://localhost:3000/jpvajda/jpvajda-react.github.io" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"/>
                {/* new relic script for data tracking */}
                <script src="newrelic.js"></script>

            </Helmet>
        </div>
   
  );
}

export default App;
