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
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
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
  const course = 'Half Stack application development';
  const props={
    part1:'Fundamentals of React',
    part2:'Using props to pass data',
    part3:"State of a component",
    exercises1:10,
    exercises2:7,
    exercises3:14
  }

  return (
    <div>
      <Header course={course} />
      <Content props={props}/>

      <React.StrictMode>


        <Total
          exercises1={props.exercises1}
          exercises2={props.exercises2}
          exercises3={props.exercises3}
        />
      </React.StrictMode>
    </div>
  )
}

export default App;
