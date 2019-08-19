import React from 'react';
import { navigate } from 'gatsby-link';
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
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const { links } = this.props;
    console.log(links);
    return (
      <div className="row">
        <div className="col-md-6">
        {links.map(function(link, index){
          if(link.type === 'standard'){
            return (
              <div key={index}>
                <h4>{link.label}</h4>
                <p className="text-muted"><a href={`${link.label === 'Phone' ? 'tel:' : 'mailto:'}${link.address}`}>{link.address}</a></p>
              </div>
            );
          }
          return null;
        })}
        </div>
        <div className="col-md-6">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
            <div className="form-group">
              <div data-netlify-recaptcha="true" />
            </div>
            <button className="btn btn-primary text-uppercase" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-12 text-center">
          {links.map(function(link, index){
            if(link.type === 'social'){
              return (
                <span key={index}>
                  {link.label}
                </span>
              );
            }
            return null;
          })}
        </div>
      </div>
    )
  }
};

Contact.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string,
      address: PropTypes.array
    })
  )
}