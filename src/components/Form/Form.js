import React from 'react'
import './Form.css'
import Input from './../Input/Input'
import { EMAIL_REGEXP, URL_REGEXP, TEXTAREA_MIN_LENGTH } from './../../constants'

class Form extends React.Component {
  constructor() {
    super();
    this.defaultState = {
      login: { name: 'login', label: 'Login Id', type: 'text', value: '', error: '', validations: ['presence'] },
      email: { name: 'email', label: 'Email', type: 'text', value: '', error: '', validations: ['presence', 'email'] },
      name: { name: 'name', label: 'Name', type: 'text', value: '', error: '', validations: ['presence'] },
      timezone: { name: 'timezone', label: 'Time Zone', type: 'select', value: 'gmt', error: '', options: [['gmt', 'GMT'], ['gmt1', 'GMT+1'], ['gmt2', 'GMT+2']], validations: ['presence'] },
      home: { name: 'home', label: 'Home Page', type: 'text', value: '', error: '', validations: ['presence', 'url'] },
      about: { name: 'about', label: 'About Me', type: 'textarea', rows: '8', cols: '40', value: '', error: '', validations: ['presence', 'length'] },
      notification: { name: 'notification', label: 'Receive notifications of comments.', type: 'checkbox', checked: 'false', error: '', validations: ['acceptance'] },
    };
    this.state = this.defaultState;
  }
  
  validateInput () {
    let isErrorPresent = false;
    let updatedState = this.state;
    Object.keys(this.state).forEach((key) => {
      let errors = [];
      this.state[key].validations.forEach((validation) => {
        if(validation === 'presence') {
          errors.push(this.checkPresence(key))
        } else if(validation === 'email') {
          errors.push(this.checkEmailFormat(key))
        } else if(validation === 'url') {
          errors.push(this.checkUrlFormat(key))
        } else if (validation === 'length') {
          errors.push(this.checkLength(key))
        } else if (validation === 'acceptance') {
          errors.push(this.checkAcceptance(key))
        }
      })
      if(errors.filter(Boolean).length > 0) {
        isErrorPresent = true;
      }
      updatedState = { ...updatedState, [key]: { ...updatedState[key], error: errors.filter(Boolean) } };
    })
    this.setState(updatedState);
    return !isErrorPresent;
  }

  checkPresence (field) {
    if (!this.state[field].value.trim()) {
      return 'Cant be blank'
    }
  }

  checkAcceptance (field) {
    if (this.state[field].checked === 'false') {
      return 'Must be accepted'
    }
  }

  checkEmailFormat(field) {
    if (!EMAIL_REGEXP.test(this.state[field].value)) {
      return 'Invalid Email format'
    }
  }

  checkUrlFormat (field) {
    if (!URL_REGEXP.test(this.state[field].value)) {
      return 'Invalid URL format'
    }
  }

  checkLength(field, minLength=TEXTAREA_MIN_LENGTH) {
    if (this.state[field].value.trim().length < minLength) {
      return `Must me greater than ${minLength} characters`
    }
  }

  onChangeHandler (event) {
    this.setState({
      ...this.state,
      [event.target.name]: {...this.state[event.target.name], value: event.target.value, checked: event.target.checked}
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.validateInput()) {
      alert('Successfully submitted');
      this.setState(this.defaultState);
    }
  }

  render() { 
    return (
      <div className = "container">
        <div className = 'center-text heading'>Registration Form </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          { Object.keys(this.state).map((key, index) => {
            return <Input {...this.state[key]} onChange={ (event) => { this.onChangeHandler(event) }}  key={index}/>
          } ) }
          <h6>You will be sent an email when someone posts comments on your blog or album</h6>
          <h5 className = 'center-text'>Your password will be mailed to you</h5>
          <Input type='submit' value='Go' inputClass='heading' containerClass='center-text' />
        </form>
      </div>      
    )    
  }
}

export default Form;
