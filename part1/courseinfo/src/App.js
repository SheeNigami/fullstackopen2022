
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.prop.name} {props.prop.exercises}
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const prop3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content prop1={part1} prop2={part2} prop3={prop3} />
      <Total total={part1.exercise + part2.exercise + prop3.exercise} />
    </div>
  )
}

export default App;
