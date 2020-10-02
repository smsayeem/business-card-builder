import React from 'react';
import FallBackImg from '../Assets/sample_fallback.png';
import './style.css';

const CardPreview = ({user, avatar: { preview_imgUrl }}) => {
  const {email, phone, houseno, street, suburb, state, postcode, country} = user;
  
  return (
    <section className="preview">
          <h1 className="card-title">hCard preview</h1>
          {/* preview card header */}
          <header className="card-header">
            <h2>sam fairfax</h2>
            <div className="card-avatar">
              <img src={ preview_imgUrl || FallBackImg } alt="avatar"/>
            </div>
          </header>
           {/* preview card body */}
          <section className="card-body">
              <div className="card-items">
                <div className="label">email</div>
                <div className="info">{email}</div>
              </div>
              <div className="card-items">
                <div className="label">phone</div>
                <div className="info">{phone}</div>
              </div>
              <div className="card-items">
                <div className="label">address</div>
                <div className="info">{houseno} {street}</div>
              </div>
              <div className="card-items">
                <div style={{visibility: 'hidden'}} className="label">address2</div>
                <div className="info">{suburb ? suburb + ',' : null} {state}</div>
              </div>
              {/* bottom two items sits next to each other, added a special wrapper */}
              <div className="card-special-item-wrapper">
                  <div className="card-special-items">
                    <div className="label">postcode</div>
                    <div className="info-special">{postcode}</div>
                  </div>
                  <div  className="card-special-items">
                    <div className="label">country</div>
                    <div className="info-special">{country}</div>
                  </div>
              </div>
          </section>
    </section>
  )
}

export default CardPreview;
