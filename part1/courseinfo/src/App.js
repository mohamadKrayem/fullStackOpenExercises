import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part=(props)=>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = ({props}) => {
  return (
    <div>
      <Part part={props[0].name} exercises={props[0].exercises}/>
      <Part part={props[1].name} exercises={props[1].exercises}/>
      <Part part={props[2].name} exercises={props[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <section>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </section>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',

    parts: [
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
  }


  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts}/>

      <React.StrictMode>


        <Total
          exercises1={course.parts[0].exercises}
          exercises2={course.parts[1].exercises}
          exercises3={course.parts[2].exercises}
        />
      </React.StrictMode>
    </div>
  )
}

export default App;
