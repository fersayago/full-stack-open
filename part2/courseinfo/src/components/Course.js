import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {

  let total = 0;

  props.course.parts.forEach(part => {
    total += part.exercises;
  })
  
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default Course