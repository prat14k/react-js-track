import { PropTypes } from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "../contact-helpers/contactSlice"
import { selectContactById } from "../contact-helpers/contactUtils";

export const Contact = ({contactId}) => {
  const contact = useSelector(state => selectContactById(state, contactId));
  const dispatch = useDispatch()

  return <div className="card">
    <div className="cardContentContainer">
      <div className="fullAvailableWidth">
        <div className="name">{contact.firstName} {contact.lastName}</div>
        <div className="email">{contact.email}</div>
      </div>
      <button className="imageButton" onClick={() => dispatch(deleteContact({id: contact.id}))}><img className="icon" src="delete.png"/></button>
    </div>
  </div>
}

Contact.propTypes = {
  contactId: PropTypes.string
}