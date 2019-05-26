import React from 'react';
import PropTypes from 'prop-types';
// import useSiteMetadata from './SiteMetadata';
// import extensionsIcon from '../img/icons/extensions-icon.svg';
// import renovationsIcon from '../img/icons/renovations-icon.svg';
// import newBuildsIcon from '../img/icons/new-builds-icon.svg';
// import landscapingIcon from '../img/icons/landscaping-icon.svg';

// function handleServiceIcon(service) {
//   switch(service) {
//     case 'Renovations':
//       return renovationsIcon;
//     case 'New Builds':
//       return newBuildsIcon;
//     case 'Landscaping':
//       return landscapingIcon;
//     default:
//       return extensionsIcon;
//   }
// }

const PortfolioGrid = ({ gridItems }) => {
  // const { services } = useSiteMetadata();
  return (
    <div className="row">
      {gridItems.map((item,index) => (
        <div key={index} className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>{item.title}</h4>
            <p className="text-muted">{item.services}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

PortfolioGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  siteMetadata: PropTypes.object
}

export default PortfolioGrid;