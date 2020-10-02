import React from 'react';
import './style.css';

const CardForm = (props) => {
  const {handleChange, handleSubmit, handleImage} = props;

  const clickUpload=()=>{
    const uploadBtn = document.querySelector('#upload-button');
    uploadBtn.click();
    uploadBtn.addEventListener('change', handleImage)
  }

  return (
    <div className="form-container">
      <header>
        <h1>hCard Builder</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="divider">
          <p>personal details</p>
        </div>
        {/* input fields */}
        <section className="form-center">
          <div className="form-group">
            <label htmlFor="givenname">given name</label>
            <input 
              type="text" 
              id='givenname' 
              name='givenname' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">surname</label>
            <input 
              type="text" 
              id='surname' 
              name='surname' 
              className="form-input"           
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input 
              type="email" 
              id='email' 
              name='email' 
              className="form-input"           
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input 
              type="test" 
              id='phone' 
              name='phone' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          </section>

          <div className="divider">
            <p>personal details</p>
          </div>
          <section className="form-center">
          <div className="form-group">
            <label htmlFor="houseno">house name or #</label>
            <input 
              type="number" 
              id='houseno' 
              name='houseno' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="street">street</label>
            <input 
              type="text" 
              id='street' 
              name='street' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="suburb">suburb</label>
            <input 
              type="text" 
              id='suburb' 
              name='suburb' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state">state</label>
            <input 
              type="text" 
              id='state' 
              name='state' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="postcode">post code</label>
            <input 
              type="number" 
              id='postcode' 
              name='postcode' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="country">country</label>
            <input 
              type="text" 
              id='country' 
              name='country' 
              className="form-input" 
              onChange={handleChange} />
          </div>
          {/* buttons */}
          <div className="btn-group ">
            <input id="upload-button" type='file' hidden/>
            <button type = 'file' className = "btn btn-avatar" onClick = {clickUpload}>Upload Avatar</button>
            <button type = 'submit' className = "btn btn-hcard">Create hCard</button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default CardForm
