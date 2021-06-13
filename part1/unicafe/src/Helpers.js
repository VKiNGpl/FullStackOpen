export const Display = ({ value }) => <>{value}</>;

export const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export const Header2 = ({ text }) => {
  return (
    <h2>
      {text}
    </h2>
  );
};

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
