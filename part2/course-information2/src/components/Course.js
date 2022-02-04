const Content = ({ parts }) => {
  const exercises = parts.map(part => part.exercises);

  return (
    <div>
      {parts.map(
        part => <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
      <h3>total of {exercises.reduce((part1, part2) => part1 + part2)} exercises</h3>
    </div>
  )
}

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course