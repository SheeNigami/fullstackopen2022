
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
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <Part prop={part1} />
      <Part prop={part2} />
      <Part prop={part3} />
    </div>
  )
}

const Total = (props) => {
  let total = 0
  for (let part of props.parts) {
    total += part.exercises
  }
  <p>
    Number of exercises {total}
  </p>
}

const App = () => {

  // Header
  const course = 'Half Stack application development'

  // Content
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
