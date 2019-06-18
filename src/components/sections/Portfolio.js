import React from 'react';
import PropTypes from 'prop-types';
import plusIcon from '../../img/icons/plus-icon.svg';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

const Portfolio = ({ jobs }) => {
  return (
    <div className="row">
      {jobs.map((job,index) => (
        <div key={index} className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <img src={plusIcon} alt='' />
              </div>
            </div>
            {/* <img 
              className="img-fluid" 
              src={`img/portfolio-${job.location.split(" ").join("-").toLowerCase()}-1.jpg`} 
              alt={job.location} 
            /> */}
            <PreviewCompatibleImage
              imageInfo={{
                image: job.image,
                alt: job.location,
                // imageStyle: {height: '225px', width: '225px'},
                className: 'img-fluid'
              }}
            />
          </a>
          <div className="portfolio-caption">
            <h4>{job.location}</h4>
            <p className="text-muted">{job.services.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

Portfolio.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      location: PropTypes.string,
      services: PropTypes.array
    })
  ),
  siteMetadata: PropTypes.object
}

export default Portfolio;