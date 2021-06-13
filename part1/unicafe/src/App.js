import React, { useState } from 'react';
import { Header2, Button } from './Helpers';
import { Statistics } from './Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good,
    neutral,
    bad
  }

  const updateVotes = (event) => {
    const innerText = event.target.innerText;

    switch (innerText) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log(`Unrecognized innerText: ${innerText}`);
    }
  };

  return (
    <div>
      <Header2 text='give feedback' />
      <Button onClick={updateVotes} text='good' />
      <Button onClick={updateVotes} text='neutral' />
      <Button onClick={updateVotes} text='bad' />
      <Header2 text='statistics' />
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
