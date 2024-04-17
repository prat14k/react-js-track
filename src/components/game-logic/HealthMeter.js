import React from 'react'
import PropTypes from 'prop-types'

function HealthMeter(props) {
  return (
    <div>
        <>
            <div className="font-weight-bold"> {props.name} </div>
            <div> {props.health} </div>
        </>
    </div>
  )
}

HealthMeter.propTypes = {
    name: PropTypes.string,
    health: PropTypes.number
};

export default HealthMeter