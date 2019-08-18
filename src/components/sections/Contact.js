import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ standard, social }) => (
  <div className="row">
    <div className="col-md-6">
    {Object.keys(standard).map((key)=> (
      <div key={key}>
        <h4>Phone</h4>
        <p className="text-muted"><a href={`tel:${standard[key].phone}`}>{standard[key].phone}</a></p>
        <h4>Email</h4>
        <p className="text-muted"><a href={`mailto:${standard[key].email}`}>{standard[key].email}</a></p>
      </div>
    ))}
    </div>
    <div className="col-md-6">
      <form
        name="dnd-contact-form"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div className="form-group">
          <label className="label" htmlFor={'name'}>
            Your name
          </label>
          <input
            className="form-control"
            type={'text'}
            name={'name'}
            id={'name'}
            required={true}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor={'phone'}>
            Your phone number
          </label>
          <input
            className="form-control"
            type={'phone'}
            name={'phone'}
            id={'phone'}
            required={true}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor={'email'}>
            Your email address
          </label>
          <input
            className="form-control"
            type={'email'}
            name={'email'}
            id={'email'}
            required={true}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor={'message'}>
            Your message
          </label>
          <textarea
            className="form-control"
            name={'message'}
            id={'message'}
            required={true}
          />
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button className="btn btn-primary text-uppercase" type="submit">
          Send Message
        </button>
      </form>
    </div>
    <div className="col-md-12 text-center">
      {social.map((socialNetwork,index) => (
        <span key={index} className="text-muted">{socialNetwork} </span>
      ))}
    </div>
  </div>
);

Contact.propTypes = {
  standard: PropTypes.array,
  social: PropTypes.array,
}

export default Contact;