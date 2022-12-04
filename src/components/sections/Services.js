import React from 'react';
import PropTypes from 'prop-types';

const Services = ({ services }) => (
  <div className="row text-center">
    {services.map((service, index) => (
      <div key={index} className="col-md-6 col-lg-3">
        <span className="dnd-service-icon-container">
          <img className="dnd-service-icon" src={service.image.publicURL} alt={service.heading} />
        </span>
        <h4 className="dnd-service-heading">{service.heading}</h4>
        <p className="text-muted">{service.description}</p>
      </div>
    ))}
  </div>
);

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({
        publicURL: PropTypes.string,
      }),
    })
  ),
}

export default Services;