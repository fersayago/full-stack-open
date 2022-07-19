import React from 'react';

const Total = (props) => {
  
  const sumOfExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  
  return (
    <p>
      Number of exercises {sumOfExercises} 
    </p>
  )
}

export default Total;