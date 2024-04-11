import PropTypes from "prop-types";
import React from "react";

export const InputNumberBox = React.memo(function InputNumberBox({fieldId, fieldLabel, fieldValue, setFieldValue}) {

  return <>
    <div className="input-number">
      <div className="label">{fieldLabel}</div>
      <div>
        <input 
          className="input-field" 
          type="number" 
          value={fieldValue || ""}
          onChange={(event) => setFieldValue(fieldId, parseInt(event.target.value))} 
          />
      </div>
    </div>
  </>
})

InputNumberBox.propTypes = {
  fieldId: PropTypes.string,
  fieldLabel: PropTypes.string,
  fieldValue: PropTypes.number,
  setFieldValue: PropTypes.func
}