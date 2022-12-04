import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import plusIcon from '../../images/icons/plus-icon.svg';
import ImageGallery from '../ImageGallery';

const Portfolio = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');

  const handleOpenModal = (e, job) => {
    document.body.classList.add('modal-open');
    setShowModal(true);
    setSelected(job);
  }

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setShowModal(false);
  }

  return (
    <>
      <div className="row">
        {jobs.map((job,index) => (
          <div key={index} className="col-md-4 col-sm-6 portfolio-item">
            <a 
              className="portfolio-link" 
              data-toggle="modal" 
              href="#dnd-portfolio-modal"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(e, job);
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <img src={plusIcon} alt='' />
                </div>
              </div>
              <GatsbyImage 
                alt={`${job.location}`}
                backgroundColor="#ffffff"
                className="img-fluid"
                image={getImage(job.images[0].image)} 
              />
            </a>
            <div className="portfolio-caption">
              <h4>{job.location}</h4>
              <p className="text-muted">{job.services.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && <ImageGallery selected={selected} handleCloseModal={(handleCloseModal)} />}
    </>
  )
};

Portfolio.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
      location: PropTypes.string,
      services: PropTypes.array
    })
  )
}

export default Portfolio;