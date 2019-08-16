import React from 'react';
import { navigate } from 'gatsby-link';
// import PropTypes from 'prop-types';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {

  const handleChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }


  return (
    <div className="row">
      <div className="col-md-6">
        Phone, Email
      </div>
      <div className="col-md-6">
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input 
                name="bot-field" 
                onChange={handleChange} 
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label" htmlFor={'name'}>
              Your name
            </label>
            <input
              className="form-control"
              type={'text'}
              name={'name'}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              id={'message'}
              required={true}
            />
          </div>
          <button className="btn btn-primary text-uppercase" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
};

// Contact.propTypes = {
//   team: PropTypes.arrayOf(
//     PropTypes.shape({
//       person: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     })
//   )
// }

export default Contact;