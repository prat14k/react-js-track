import React from 'react'
import PropTypes from 'prop-types'
import Button from '../generic/Button'

function ActionButtons(props) {
  return (
    <>
        <Button
        onClickHandler={props.onAttack}
        type="primary">
            Attack
        </Button>
        <Button
        onClickHandler={props.onSpecialAttack}
        type="info">
            Special Attack
        </Button>
        
        <Button
        onClickHandler={props.onHeal}
        type="success">
            Heal
        </Button>
        
        <Button
        onClickHandler={props.onGiveUp}
        type="danger">
            Give Up
        </Button>
    </>
  )
}

ActionButtons.propTypes = {
    onAttack: PropTypes.func,
    onSpecialAttack: PropTypes.func,
    onHeal: PropTypes.func,
    onGiveUp: PropTypes.func
};

export default ActionButtons

