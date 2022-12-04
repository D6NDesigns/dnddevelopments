import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import plusIcon from '../../images/icons/plus-icon.svg';
// import Flickity from 'react-flickity-component';

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
      {showModal && (
        <>
          <div 
            className="dnd-modal modal fade show"
            id="dnd-portfolio-modal" 
            tabIndex="-1" 
            role="dialog" 
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div 
                  className="close-modal" 
                  data-dismiss="modal"
                  onClick={() => handleCloseModal()}
                  onKeyDown={() => handleCloseModal()}
                  role="button"
                  tabIndex={0}
                >
                  <img src={plusIcon} alt='' />
                </div>
                <div className="modal-body">
                  <div className="container">
                    <h2 className="text-uppercase">{selected.location}</h2>
                    <p className="item-intro text-muted">{selected.services.join(', ')}.</p>
                    {/* <Flickity
                      className={''} // default ''
                      elementType={'div'} // default 'div'
                      disableImagesLoaded={false} // default false
                      reloadOnUpdate={false}
                      static
                    >
                    {
                      selected.images.map((image,index) => (
                        <img 
                          key={index} 
                          src={image.image.childImageSharp.fluid.src} 
                          alt=''
                          className="img-fluid"
                        />
                      ))
                    }
                    </Flickity> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
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