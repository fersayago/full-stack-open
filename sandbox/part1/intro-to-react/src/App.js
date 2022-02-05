import React from 'react';

const Hello = (props) => {

  const nameFromProps = props.name
  const ageFromProps = props.age

  return (
    <div>
      <p>Hello {nameFromProps}, your age is {ageFromProps}</p>
    </div>
  )
}

const App = () => {
  const name = "Fernando"
  const age = 28

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Ceci" age={26} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;