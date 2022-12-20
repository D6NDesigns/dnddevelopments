import React from 'react';
import { navigate } from 'gatsby-link';
import PropTypes from 'prop-types';
import emailIcon from '../../images/icons/email-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';
import instagramIcon from '../../images/icons/instagram-icon.svg';
import phoneIcon from '../../images/icons/phone-icon.svg';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import { Link } from 'react-scroll';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
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
    this.setState({ [e.target.name]: e.target.value });
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
    const { heading, description, links, image } = this.props;
    console.log('this.props', this.props);
    return (
      <>
        <GatsbyImage 
          alt=''
          backgroundColor="#1B1C1C"
          image={getImage(image)} 
          loading="eager"
        />
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8">
            <div className="dnd-contact-left d-block col-sm-12">
              <h2 className="section-heading text-uppercase">{heading}</h2>
              <h3 className="section-subheading text-muted">{description}</h3>
              {links && links.map(function(link, index){
                if (link.type === 'standard'){
                  return (
                    <p
                      className="dnd-contact-link-container text-muted"
                      key={index}
                    >
                      <a
                        className={`dnd-contact-icon-container dnd-${link.label.toLowerCase()}-icon`}
                        href={`${link.label === 'Phone' ? 'tel:' : 'mailto:'}${link.address}`}
                      >
                        <img 
                          alt={link.label} 
                          className="dnd-contact-icon" 
                          src={handleContactIcon(link.label)} 
                        /> 
                      </a>
                    </p>
                  );
                }
                return (
                  <p
                    className="dnd-contact-link-container text-muted"
                    key={index}
                  >
                    <a 
                      className={`dnd-contact-icon-container dnd-${link.label.toLowerCase()}-icon`}
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
                  </p>
                );
              }
            )}
            </div>
            <div className="dnd-contact-right d-block col-sm-12">
              <h4>Send Message</h4>
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
              <div className="row">
                <div className="dnd-contact-bottom col-sm-12 text-center">
                  <Link 
                    duration={350}
                    spy={true}
                    smooth={true}
                    to="intro"
                    className="dnd-contact-logo text-hide"
                  >
                    Back To Top
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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