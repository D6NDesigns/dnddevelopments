import React from 'react';
import PropTypes from 'prop-types';
import extensionsIcon from '../../img/icons/extensions-icon.svg';
import renovationsIcon from '../../img/icons/renovations-icon.svg';
import newBuildsIcon from '../../img/icons/new-builds-icon.svg';
import landscapingIcon from '../../img/icons/landscaping-icon.svg';

function handleServiceIcon(service) {
  switch(service) {
    case 'Renovations':
      return renovationsIcon;
    case 'New Builds':
      return newBuildsIcon;
    case 'Landscaping':
      return landscapingIcon;
    default:
      return extensionsIcon;
  }
}

const Services = ({ services }) => (
  <div className="row text-center">
    {services.map((service,index) => (
      <div key={index} className="col-md-6 col-lg-3">
        <span className="dnd-service-icon-container">
          <img className="dnd-service-icon" src={handleServiceIcon(service.title)} alt={service.title} />
        </span>
        <h4 className="dnd-service-heading">{service.title}</h4>
        <p className="text-muted">{service.text}</p>
      </div>
    ))}
  </div>
);

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  siteMetadata: PropTypes.object
}

export default Services;