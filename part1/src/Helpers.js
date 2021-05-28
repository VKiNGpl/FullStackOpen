export const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

export const Display = ({ counter }) => <p>{counter}</p>;

export const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
);
