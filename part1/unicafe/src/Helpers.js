export const Display = (props) => <div>{props.value}</div>;

export const Header2 = (props) => {
  // console.log(props)
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
