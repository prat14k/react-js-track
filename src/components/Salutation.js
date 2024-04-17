import React from 'react'
import PropTypes from 'prop-types'

function Salutation(props) {
  return (
    <div>
        {props.salutation} {props.receiverName},
    </div>
  )
}

Salutation.propTypes = {
    salutation: PropTypes.string,
    receiverName: PropTypes.string
}

Salutation.defaultProps = {
  salutation: "Hi",
  receiverName: "Sir"
};

export default Salutation

