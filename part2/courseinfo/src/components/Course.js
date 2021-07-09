import React from 'react';

export const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Header2 = (props) => {
  // console.log(props)
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((acc, value) => acc + value.exercises, 0);

  return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export const Course = ({ course }) => {
  // console.log(course)
  return (
    <div>
      <Header2 text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
