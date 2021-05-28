import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello { props.name }, you are { props.age } years old.</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <p>Greetings</p>
      <Hello name="George" />
      <Hello name="Daisy" />
      <Hello name="Maya" age={ 26 + 10 } />
      <Hello name={ name } age={ age } />
    </div>
  );
};

export default App;