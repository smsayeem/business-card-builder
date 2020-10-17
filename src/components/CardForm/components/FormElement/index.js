import React from 'react'
import PropTypes from 'prop-types'

function FormElement({formField, title, name, type, handleChange}) {
  return (
    <>
      {
        formField === 'input' ? 
        <div className="form-group">
          <label htmlFor={name}>{title}</label>
          <input 
            type={type} 
            name={name}
            className="form-input" 
            onChange={handleChange} />
        </div>
      :
        <div className="form-group">
          <label htmlFor={name}>{title}</label>
            <select name={name} className="form-input" onChange={handleChange} >
              <option value="-1">Select your state</option>
              <option value="NSW">NSW</option>
              <option value="ACT">ACT</option>
              <option value="VIC">VIC</option>
              <option value="QLD">QLD</option>
              <option value="TAS">TAS</option>
              <option value="WA">WA</option>
            </select>
        </div>
      }
    </>
  )
}

FormElement.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
}

FormElement.defaultProps = {
  title: '',
  name: '',
  type: null,
  handleChange: ()=>{},
}

export default FormElement

