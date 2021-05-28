import React, { useState } from 'react';
import { Hello } from './Hello.js';

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <p>{counter}</p>
    </div>
  );
};

export default App;
