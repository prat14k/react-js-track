import React from 'react'
import PropTypes from 'prop-types'

function Regards(props) {
  return (
    <>
        {props.regards}, <br/> {props.senderName}
    </>
  )
}

Regards.propTypes = {
    regards: PropTypes.string,
    senderName: PropTypes.string
}

export default Regards

