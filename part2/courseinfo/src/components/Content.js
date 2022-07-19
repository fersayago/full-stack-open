import React from 'react';
import Part from './Part'

const Content = (props) => {

  return (
    <>
      {
        props.parts.map(part => {
          return <Part part={part.name} exercises={part.exercises} key={part.id}/>
        })
      }
    </>
  )
}

export default Content;