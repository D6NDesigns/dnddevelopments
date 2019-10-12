import React, { Component } from 'react';
import PropTypes from 'prop-types';
import plusIcon from '../../img/icons/plus-icon.svg';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import Flickity from 'react-flickity-component';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = (e,job) => {
    e.preventDefault();
    document.body.classList.add('modal-open');
    this.setState({ showModal: true, job: job });
  }

  handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({ showModal: false });
  }

  render() {
    const { jobs } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          {jobs.map((job,index) => (
            <div key={index} className="col-md-4 col-sm-6 portfolio-item">
              <a 
                className="portfolio-link" 
                data-toggle="modal" 
                href="#dnd-portfolio-modal"
                onClick={(e) => {this.handleOpenModal(e,job)}}
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <img src={plusIcon} alt='' />
                  </div>
                </div>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: job.images[0].image,
                    alt: job.location,
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
        {this.state.showModal && (
          <React.Fragment>
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
                    onClick={() => this.handleCloseModal()}
                  >
                    <img src={plusIcon} alt='' />
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <h2 className="text-uppercase">{this.state.job.location}</h2>
                      <p className="item-intro text-muted">{this.state.job.services.join(', ')}.</p>
                      <Flickity
                        className={''} // default ''
                        elementType={'div'} // default 'div'
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate
                        static={true}
                      >
                      {
                        this.state.job.images.map((image,index) => (
                          <img 
                            key={index} 
                            src={image.image.childImageSharp.fluid.src} 
                            alt=''
                            className="img-fluid"
                          />
                        ))
                      }
                      </Flickity>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
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