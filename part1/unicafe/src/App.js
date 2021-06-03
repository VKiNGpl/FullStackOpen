import React, { useState } from 'react';
import { Display, Header2, Button } from './Helpers';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => setGood(good + 1);
  const updateNeutral = () => setNeutral(neutral + 1);
  const updateBad = () => setBad(bad + 1);
  
  return (
    <div>
      <Header2 text="give feedback" />
      <Button onClick={updateGood} text="good" />
      <Button onClick={updateNeutral} text="neutral" />
      <Button onClick={updateBad} text="bad" />
      <Header2 text="statistics" />
      <Display value={`good ${good}`} />
      <Display value={`neutral ${neutral}`} />
      <Display value={`bad ${bad}`} />
    </div>
  );
};

export default App;
