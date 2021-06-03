import React, { useState } from 'react';
import { Display, Button } from './Helpers';

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setToValue(1000)} text='reset to thousand' />
      <Button handleClick={setToValue(0)} text='reset to zero' />
      <Button handleClick={setToValue(value + 1)} text='increment' />
      <Button handleClick={setToValue(value - 1)} text='decrement' />
    </div>
  );
};

export default App;
