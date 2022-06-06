const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <h4>total of {sum} exercises</h4>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />  
    )}
  </>


const Course = ({course}) => {
  const {name, parts} = course
  const sum = parts.reduce((total, obj) => total + obj.exercises, 0)

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={sum} />
    </div>
  )
}

export default Course