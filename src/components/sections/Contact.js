import React from 'react';
import { navigate } from 'gatsby-link';
import PropTypes from 'prop-types';
import emailIcon from '../../img/icons/email-icon.svg';
import facebookIcon from '../../img/icons/facebook-icon.svg';
import instagramIcon from '../../img/icons/instagram-icon.svg';
import phoneIcon from '../../img/icons/phone-icon.svg';
import twitterIcon from '../../img/icons/twitter-icon.svg';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function handleContactIcon(contact) {
  switch(contact) {
    case 'Email':
      return emailIcon;
    case 'Facebook':
      return facebookIcon;
    case 'Phone':
      return phoneIcon;
    case 'Instagram':
      return instagramIcon;
    case 'Twitter':
      return twitterIcon;
    default:
      break;
  }
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
    return (
      <div className="row">
        <div className="col-md-6">
        {links && links.map(function(link, index){
          if(link.type === 'standard'){
            return (
              <p 
                className="text-muted"
                key={index}
              >
                <a
                  className={`dnd-contact-icon-link dnd-${link.label.toLowerCase()}-icon`}
                  href={`${link.label === 'Phone' ? 'tel:' : 'mailto:'}${link.address}`}
                >
                <img 
                  alt={link.label} 
                  className="dnd-contact-icon" 
                  src={handleContactIcon(link.label)} 
                /> 
                {link.address}
                </a>
              </p>
            );
          }
          return null;
        })}
          <p className="col-xs-12">
          {links && links.map(function(link, index){
            if(link.type === 'social'){
              return (
                <a 
                  className={`dnd-contact-icon-link dnd-${link.label.toLowerCase()}-icon`}
                  href={link.address}
                  key={index} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    alt={link.label} 
                    className="dnd-contact-icon" 
                    src={handleContactIcon(link.label)} 
                  />
                </a>
              );
            }
            return null;
          })}
          </p>
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