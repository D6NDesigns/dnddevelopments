import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import plusIcon from '../images/icons/plus-icon.svg';

const ImageGallery = ({ handleCloseModal, selected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalImages = selected.images.length - 1;
  return (
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
              <div>
                <button
                  aria-label="Previous"
                  className="dnd-modal-button dnd-modal-previous-button"
                  disabled={!selectedIndex}
                  onClick={() => setSelectedIndex(selectedIndex - 1)}
                >
                  Previous
                </button>
                {selected.images.map((image, index) => (
                  <GatsbyImage 
                    alt={`${selected.location}`}
                    backgroundColor="transparent"
                    className={`dnd-image img-fluid ${index === selectedIndex ? '.d-block' : 'd-none'}`}
                    image={getImage(image.image)}
                    key={index}
                  />
                ))}
                <button
                  aria-label="Next"
                  className="dnd-modal-button dnd-modal-next-button"
                  disabled={selectedIndex === totalImages}
                  onClick={() => setSelectedIndex(selectedIndex + 1)}
                  onKeyDown={() => setSelectedIndex(selectedIndex + 1)}
                >
                  Next
                </button>
                <ol className="dnd-stepper">
                  {selected.images.map((image, index) => (
                    <li
                      aria-current={index === selectedIndex ? 'step' : null}
                      aria-label={`${selected.location} Image ${index + 1}`}
                      className={`dnd-step${index === selectedIndex ? ' dnd-step-active' : ''}`}
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      onKeyDown={() => setSelectedIndex(index)}
                    >
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </>
  );
};

ImageGallery.propTypes = {
  handleCloseModal: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ImageGallery;