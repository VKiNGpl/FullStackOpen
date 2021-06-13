import React, { useState } from 'react';
import { Display, Header2, Button } from './Helpers';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const updateGood = () => {
    const updatedGood = good + 1;
    const voteRatio = updatedGood - bad;
    const updatedAll = updatedGood + neutral + bad;
    const updatedAverage = voteRatio / updatedAll;
    const updatedPositive = (updatedGood / updatedAll) * 100;

    setGood(updatedGood);
    setAll(updatedAll);
    setAverage(updatedAverage);
    setPositive(updatedPositive);
  };

  const updateNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = good + updatedNeutral + bad;
    const updatedPositive = (good / updatedAll) * 100;

    setNeutral(updatedNeutral);
    setAll(updatedAll);
    setPositive(updatedPositive);
  };
  
  const updateBad = () => {
    const updatedBad = bad + 1;
    const voteRatio = good - updatedBad;
    const updatedAll = good + neutral + updatedBad;
    const updatedAverage = voteRatio / updatedAll;
    const updatedPositive = (good / updatedAll) * 100;

    setBad(updatedBad);
    setAll(updatedAll);
    setAverage(updatedAverage);
    setPositive(updatedPositive);
  };

  return (
    <div>
      <Header2 text='give feedback' />
      <Button onClick={updateGood} text='good' />
      <Button onClick={updateNeutral} text='neutral' />
      <Button onClick={updateBad} text='bad' />
      <Header2 text='statistics' />
      <Display value={`good ${good}`} />
      <Display value={`neutral ${neutral}`} />
      <Display value={`bad ${bad}`} />
      <Display value={`all ${all}`} />
      <Display value={`average ${average}`} />
      <Display value={`positive ${positive} %`} />
    </div>
  );
};

export default App;
