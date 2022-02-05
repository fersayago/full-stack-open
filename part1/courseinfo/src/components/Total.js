import React from 'react';

const Total = (props) => {
  const sumOfExercises = props.exercises1 + props.exercises2 + props.exercises3
  
  return (
    <p>
      Number of exercises {sumOfExercises} 
    </p>
  )
}

export default Total;