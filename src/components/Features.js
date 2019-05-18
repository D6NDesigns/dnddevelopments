import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../components/SiteMetadata';

const FeatureGrid = ({ gridItems }) => {
  const { services } = useSiteMetadata();
  return (
    <div className="row text-center">
      {gridItems.map((item,index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="dnd-service-heading">{services[index]}</h4>
          <p className="text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  )
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  siteMetadata: PropTypes.object
}

export default FeatureGrid;