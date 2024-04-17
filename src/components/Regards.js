import React from 'react'
import PropTypes from 'prop-types'

function Regards(props) {
  return (
    <div>
        {props.regards}, <br/> {props.senderName}
    </div>
  )
}

Regards.propTypes = {
    regards: PropTypes.string,
    senderName: PropTypes.string
}

Regards.defaultProps = {
  regards: "Regards",
  senderName: "Anonymous"
};

export default Regards

