const Persons = (props) => props.array.map(person => <p key={person.name}>{person.name} {person.number}</p>)
export default Persons;