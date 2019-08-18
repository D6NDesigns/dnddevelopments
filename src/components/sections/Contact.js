import React from 'react';
// import { navigate } from 'gatsby-link';
import PropTypes from 'prop-types';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isValidated: false,
      isSubmitted: false,
    }
  }

  handleSubmit = e => {
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
      .then(() => this.setState({isSubmitted: true}))
      .catch(error => alert(error))
  }

  render() {
    const { standard, social } = this.props;
    return (
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
            name="contact-form"
            method="post"
            // action="/contact/thanks/"
            action="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input 
                  name="bot-field" 
                  onChange={this.handleChange} 
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
            </div>
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
    )
  }
};

Contact.propTypes = {
  standard: PropTypes.array,
  social: PropTypes.array,
}