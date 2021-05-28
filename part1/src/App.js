import React, { useState } from 'react';
import { Hello, Display, Button } from './Helpers.js';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Display counter={counter} />
      <Button text='plus' handleClick={increaseByOne} />
      <Button text='minus' handleClick={decreaseByOne} />
      <Button text='zero' handleClick={setToZero} />
    </div>
  );
};

export default App;
