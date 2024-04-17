import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <button className={`btn btn-${props.type}`} onClick={props.onClickHandler}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClickHandler: PropTypes.func
};

export default Button