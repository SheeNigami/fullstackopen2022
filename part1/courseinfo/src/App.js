
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.prop.part} {props.prop.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part prop={props.prop1} />
      <Part prop={props.prop2} />
      <Part prop={props.prop3} />
    </div>
  )
}

const Total = (props) => {
  <p>
    Number of exercises {props}
  </p>
}

const App = () => {

  // Header
  const course = 'Half Stack application development'

  // Content
  const prop1 = {
    part: 'Fundamentals of React',
    exercise: 10
  }

  const prop2 = {
    part: 'Using props to pass data',
    exercise: 7
  }

  const prop3 = {
    part: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content prop1={prop1} prop2={prop2} prop3={prop3} />
      <Total total={prop1.exercise + prop2.exercise + prop3.exercise} />
    </div>
  )
}

export default App;
