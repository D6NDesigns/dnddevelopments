import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  const { background, description, heading, image } = props;
  const id = heading ? heading.toLowerCase() : '';
  console.log('image', image);
  return (
    <section 
      id={id} 
      className={`dnd-${id} dnd-branding dnd-section`}
    >
      <div className="container">
      {id !== 'contact' && (
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{heading}</h2>
            <h3 className="section-subheading text-muted">{description}</h3>
          </div>
        </div>)}
        {props.children}
      </div>
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Section;