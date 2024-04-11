import { InputTextBox } from "./InputTextBox";
import { contactUtils, contactFormConfig } from "../helpers/contactUtils";
import { useState } from "react";
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

export const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const updateField = (id, value) => {
    setFormData(data => ({
      ...data, [id]: value
    }))
  };

  const submitAction = (event) => {
    event.preventDefault();
    const errorMsgs = contactUtils.validateAllFields(formData);
    setFormError(errorMsgs);
    
    const noError = Object.keys(errorMsgs).every(key => !Boolean(errorMsgs[key]));
    if (noError) {
      formData.id = uuidv4();
      addContact(formData);
      setFormData({})
    }
  }

  const inputFields = Object.keys(contactFormConfig).map(key => {
    return <InputTextBox key={key} fieldId={key} value={formData[key]} errorMessage={formError[key]} updateValue={updateField} />
  })

  return <form className="form">
    { inputFields } 
    <button className="submit-button" type="submit" onClick={(e) => submitAction(e)}>Create</button>
  </form>
}

ContactForm.propTypes = {
  addContact: PropTypes.func
}