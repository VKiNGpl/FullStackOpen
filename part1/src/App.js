import React, { useState } from 'react';
import { Hello } from './Hello.js';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  );
};

export default App;
