const Input = (props) => {
  let inputElement = null;
  if (props.type === 'text') {
    inputElement = (
      <div>
        <label htmlFor={ props.name } >{ props.label } </label>
        <input type={ props.type } name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChange }/>
        { props.error  && <div className='error'> { props.error.join()} </div> }
      </div>
    )
  } else if (props.type === 'select') {
    inputElement = (
      <div>
        <label htmlFor={ props.name } >{ props.label } </label>
        <select name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChange }>
          { props.options.map(function(element, index){
            return <option value={element[0]} key={index}> {element[1]} </option>
          })}
        </select>
        { props.error  &&
          <div className='error'> { props.error.join() } </div>
        }
        </div> 
    )   
  } else if (props.type === 'checkbox') {
    inputElement = (
      <div>
        <input type={ props.type } id={ props.name } name={ props.name } value={ props.value } onChange={ props.onChange }/>
        <label htmlFor={ props.name }><h5>{ props.label }</h5></label>
        { props.error  && <span className='error'> { props.error.join() } </span> }
      </div>
    )
  } else if (props.type === 'textarea') {
    inputElement = (
      <div>
        <label htmlFor={ props.name } >{ props.label } </label> <br />
        <textarea rows = { props.rows } cols={ props.cols } name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChange }/>
        { props.error  && <span className='error'> { props.error.join() } </span> }
      </div>
    )
  } else if (props.type==='submit') {
    inputElement = (
      <div className={ props.containerClass }>
        <input type={ props.type } value={ props.value } className={ props.inputClass } />
      </div>
    )
  }
  return (
    <>
      {inputElement}
    </>
  )
}

export default Input;
