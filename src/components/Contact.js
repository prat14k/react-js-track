import { PropTypes } from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "../contact-helpers/contactSlice"
import { selectContactById } from "../contact-helpers/contactUtils";

export const Contact = (props) => {
  const contact = useSelector(state => selectContactById(state, props.contactId));
  const dispatch = useDispatch()

  return <div className="card">
    <div className="card-container">
      <div className="flex-width">
        <div className="name">{contact.firstName} {contact.lastName}</div>
        <div className="email">{contact.email}</div>
      </div>
      <button className="imageButton" onClick={() => dispatch(deleteContact({id: contact.id}))}>
        <img className="icon" src="delete.png" alt={"delete-" + contact.id} />
      </button>
    </div>
  </div>
}

Contact.propTypes = {
  contactId: PropTypes.string
}