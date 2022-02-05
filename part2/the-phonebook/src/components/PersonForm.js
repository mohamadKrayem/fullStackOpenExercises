import Filter from "./Filter";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>

        name: <Filter value={props.nameValue} onChange={props.handleNewName} />
        <br />
        number: <Filter value={props.numberValue} onChange={props.handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default PersonForm;