const Filter = (props) => {
  return (
    <div>
      filter shown with<input value={props.value} onChange={props.onChange} />
      {props.array.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Filter;