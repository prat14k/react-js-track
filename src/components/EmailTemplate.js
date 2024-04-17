import React from 'react'
import PropTypes from 'prop-types'
import Salutation from './Salutation'
import Regards from './Regards'

function EmailTemplate(props) {
  return (
    <div>
        <Salutation salutation={props.salutation} receiverName={props.receiverName} /> 
        {props.children}
        <Regards regards={props.regards} senderName={props.senderName} />
    </div>
  )
}

EmailTemplate.propTypes = {
    receiverName: PropTypes.string,
    senderName: PropTypes.string,
    salutation: PropTypes.string,
    regards: PropTypes.string,
    children: PropTypes.node
}

export default EmailTemplate