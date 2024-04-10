import React from 'react'
import PropTypes from 'prop-types'

function Salutation(props) {
  return (
    <>
        {props.salutation} {props.receiverName},
    </>
  )
}

Salutation.propTypes = {
    salutation: PropTypes.string,
    receiverName: PropTypes.string
}

export default Salutation

