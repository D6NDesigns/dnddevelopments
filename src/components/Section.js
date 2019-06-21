import React from 'react';
import PropTypes from 'prop-types';

const Section = class extends React.Component {
  render() {
    const { heading, description } = this.props;
    const id = heading.toLowerCase();
    return (
      <section id={id} className={`dnd-${id} dnd-branding dnd-section`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{heading}</h2>
              <h3 className="section-subheading text-muted">{description}</h3>
            </div>
          </div>
          {this.props.children}
        </div>
      </section>
    );
  }
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Section;