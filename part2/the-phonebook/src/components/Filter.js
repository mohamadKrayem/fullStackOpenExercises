const Filter = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} />
      {props.array.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Filter;