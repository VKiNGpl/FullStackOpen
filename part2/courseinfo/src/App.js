import React from 'react';

const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  // console.log(props)
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};
const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
      <Part part={props.parts[3]} />
      <Part part={props.parts[4]} />
      <Part part={props.parts[5]} />
    </div>
  );
};

const Total = (props) => {
  // console.log(props)
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises +
    props.parts[3].exercises +
    props.parts[4].exercises +
    props.parts[5].exercises;

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
      {
        name: 'State of a 3',
        exercises: 3,
      },
      {
        name: 'State of a 4',
        exercises: 4,
      },
      {
        name: 'State of a 5',
        exercises: 5,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
