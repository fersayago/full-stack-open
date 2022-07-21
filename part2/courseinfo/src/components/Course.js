import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {

  const sumOfExercises = props.course.parts.reduce(
    (prevValue, currValue) => prevValue + currValue.exercises,
    0
  );

  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <p>
        <b>total of {sumOfExercises} exercises</b>
      </p>
    </div>
  );
};

export default Course;
