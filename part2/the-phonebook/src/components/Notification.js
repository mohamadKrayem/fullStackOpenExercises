const Notification = ({ notification, style }) => {

  return (
    <div className="note" style={style}>
      <p>{notification}</p>
    </div>
  )
}
export default Notification;