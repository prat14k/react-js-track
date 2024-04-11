import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../contact-helpers/contactSlice";

export const InputTextBox = (props) => {
  const field = useSelector(state => state.contact.formData[props.fieldId]);
  const dispatch = useDispatch();
  return <>
    <div>
      <div className="label">{field.label}<span className="error">*</span></div>
      <input 
        className="inputField"
        type="text" 
        value={field.value}
        onChange={(event) => dispatch(setFormData({fieldId: props.fieldId, value: event.target.value}))} />
      <ErrorMessage message={field.errorMsg} />
    </div>
  </>
}

InputTextBox.propTypes = {
  fieldId: PropTypes.string
}