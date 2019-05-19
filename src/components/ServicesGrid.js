import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from './SiteMetadata';
import extensionsIcon from '../img/icons/extensions-icon.svg';
import renovationsIcon from '../img/icons/renovations-icon.svg';
import newBuildsIcon from '../img/icons/new-builds-icon.svg';
import landscapingIcon from '../img/icons/landscaping-icon.svg';

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

const ServicesGrid = ({ gridItems }) => {
  const { services } = useSiteMetadata();
  return (
    <div className="row text-center">
      {gridItems.map((item,index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <span className="dnd-service-icon-container">
            <img className="dnd-service-icon" src={handleServiceIcon(services[index])} alt={services[index]} />
          </span>
          <h4 className="dnd-service-heading">{services[index]}</h4>
          <p className="text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  )
};

ServicesGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  siteMetadata: PropTypes.object
}

export default ServicesGrid;