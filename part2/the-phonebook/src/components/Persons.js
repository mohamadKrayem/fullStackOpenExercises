import axios from "axios";

const Persons = (props) => props.persons.map(person => {
  console.log(person)
  return (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={
        () => {
          if (window.confirm(`Delete ${person.name}`)) {
            axios.delete(`http://localhost:3001/persons/${person.id}`)
              .then(() => {
                props.setPersons(props.persons.filter(member => member.id !== person.id))
              })
          }

        }
      }>delete</button>
    </div>

  )
})
export default Persons;