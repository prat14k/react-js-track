import PropTypes from "prop-types";
import { InlineError } from "./InlineError";
import { contactFormConfig } from "../helpers/contactUtils";

export const InputTextBox = (props) => {
  const fieldLabel = contactFormConfig[props.fieldId].label;
  return <>
    <div>
      <div className="label">{fieldLabel}<span className="error">*</span></div>
      <input 
        className="input-field"
        type="text" 
        value={props.value || ""}
        onChange={(event) => props.updateValue(props.fieldId, event.target.value)} 
      />
      <InlineError message={props.errorMessage} />
    </div>
  </>
}

InputTextBox.propTypes = {
  fieldId: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}