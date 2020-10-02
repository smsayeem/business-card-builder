import React from 'react';
import PropTypes from 'prop-types';
import FallBackImg from '../Assets/sample_fallback.png';

import './style.css';

const CardPreview = ({ user, avatar: { preview_imgUrl } }) => {
  const { givenname, surname, email, phone, houseno, street, suburb, state, postcode, country } = user;
  
  return (
    <section className="preview">
          <h1 className="card-title">hCard preview</h1>
          {/* preview card header */}
          <header className="card-header">
            <h2>{givenname} {surname}</h2>
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

CardPreview.propTypes = {
  user: PropTypes.shape({
    givenname: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    houseno: PropTypes.string,
    street: PropTypes.string,
    suburb: PropTypes.string,
    state: PropTypes.string,
    postcode: PropTypes.number,
    country: PropTypes.string,
  }),
  avatar: PropTypes.shape({
    preview_imgUrl: PropTypes.string,
  }),
};

CardPreview.defaultProps = {
  user: PropTypes.shape({
    givenname: null,
    surname: null,
    email: null,
    phone: null,
    houseno: null,
    street: null,
    suburb: null,
    state: null,
    postcode: null,
    country: null,
  }),
  avatar: PropTypes.shape({
    preview_imgUrl: null,
  }),
};


export default CardPreview;
