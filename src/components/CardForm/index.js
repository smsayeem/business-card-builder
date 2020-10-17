import React from 'react';
import PropTypes from 'prop-types';
import FormElement from './components/FormElement';
import isvalidForm from '../../utilities/helper/isvalidForm';
import Divider from './components/Divider'

import './style.css';

const CardForm = ({ handleChange, handleSubmit, handleImage }) => {

  // when 'Upload Avatar' button is clicked this function targets the input ('#upload-button') and add a callback function to upload image
  const clickUpload=()=>{
    const uploadBtn = document.querySelector('#upload-button');
    uploadBtn.click();
  }

  const validateFormData = (e) => {
    e.preventDefault();
    isvalidForm(e) && handleSubmit(e);
  }
  return (
    <div className="form-container">
      <header>
        <h1>hCard Builder</h1>
      </header>
      <form onSubmit={validateFormData}>
        <Divider text="personal details" />
        <section className="form-center">
          <FormElement formField="input" handleChange={handleChange} name="givenname" title="given name" type="text" />
          <FormElement formField="input" handleChange={handleChange} name="surname" title="surname" type="text" />
          <FormElement formField="input" handleChange={handleChange} name="email" title="email" type="email" />
          <FormElement formField="input" handleChange={handleChange} name="phone" title="phone" type="text" />
        </section>
        <Divider text="personal details" />
        <section className="form-center">
          <FormElement formField="input" handleChange={handleChange} name="houseno" title="houseno" type="text" />
          <FormElement formField="input" handleChange={handleChange} name="street" title="street" type="text" />
          <FormElement formField="input" handleChange={handleChange} name="suburb" title="suburb" type="text" />
          <FormElement formField="select" handleChange={handleChange} name="state" title="state" type="text" />
          <FormElement formField="input" handleChange={handleChange} name="postcode" title="postcode" type="number" />
          <FormElement formField="input" handleChange={handleChange} name="country" title="country" type="text" />
          {/* buttons */}
          <div className="btn-group ">
            {/* this input allows to select image files. It is active but hidden as per design  */}
            <input name="img-upload" id="upload-button" hidden type='file' onChange={handleImage} />

            {/* this button will call a function 'clickUpload' that will trigger the input above to upload an image */}
            <input readOnly name="upload" id="btn-avatar" className = "btn btn-avatar" onClick = {clickUpload}  value="Upload Avatar" />
            
            {/* no functionality added for this button as it is not part of the test */}
            <button type="submit" name="submit" className = "btn btn-hcard">
              Create hCard
            </button>
          </div>
        </section>
      </form>
    </div>
  )
}

CardForm.propTypes = {
  handleChange: PropTypes.func, 
  handleSubmit: PropTypes.func, 
  handleImage: PropTypes.func,
};

CardForm.defaultProps = {
  handleChange: ()=>{}, 
  handleSubmit: ()=>{}, 
  handleImage: ()=>{},
};

export default CardForm
