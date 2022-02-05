
const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>

        name: <input value={props.nameValue} onChange={props.handleNewName} />
        <br />
        number: <input value={props.numberValue} onChange={props.handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default PersonForm;