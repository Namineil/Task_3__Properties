import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <Joke
        question="What runs but never walks?"
        punchLine="Water!"
      ></Joke>
      <Joke
        question="What does a ghost order at an Italian restaurant?"
        punchLine="Spooketi."
      ></Joke>
      <Joke
        question="What's the ratio of a pumpkin's circumference to its diameter?"
        punchLine="Pumpkin Pi  (3.1428571428571428571428571428571)"
      ></Joke>
      <Joke
        question="Why did the Jedi fail at standup comedy?"
        punchLine="His jokes were Forced"
      ></Joke>
      <Joke
        question="What animal has more lives than a cat?"
        punchLine="A frog. It croaks every night."
      ></Joke>
      <Joke
        punchLine='A Roman walks into a bar and holds up 2 fingers and says "5 beers."'
      ></Joke>
    </div>
  );
}

export default App;
