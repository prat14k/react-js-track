import { ContactCard } from './ContactCard';
import PropTypes from "prop-types"

export const ContactList = (props) => {
  const contactsList = props.contactList.map((contact) => 
    <ContactCard key={contact.id} contact={ contact } deleteContact={props.deleteContact} />
  )

  return <div className='grid-list'>
    {contactsList}
  </div>
}

ContactList.propTypes = {
  contactList: PropTypes.array,
  deleteContact: PropTypes.func
}