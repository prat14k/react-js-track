import PropTypes from "prop-types"

export const ContactCard = (props) => {
  return <div className="card">
    <div className="card-container">
      <div className="flex-width">
        <div className="name">{props.contact.firstName} {props.contact.lastName}</div>
        <div className="email">{props.contact.email}</div>
      </div>
      <button className="imageButton" onClick={() => props.deleteContact(props.contact.id)}>
        <img className="icon" src="delete.png" alt={"delete-" + props.contact.id} />
      </button>
    </div>
  </div>
}

ContactCard.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func
}