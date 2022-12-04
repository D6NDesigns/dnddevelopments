import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Intro = ({ title, heading, subheading, image }) => {
  const img = getImage(image);
  return (
    <header
      id="intro"
      className="dnd-intro dnd-branding"
    >
      <GatsbyImage image={img} alt='' />
      <div className="container">
        <div className="intro-text">
          <h1 className="intro-lead-in">
            {title}
          </h1>
          <h3 className="intro-heading text-uppercase">
            {heading}
          </h3>
          <Link 
            className="btn btn-primary btn-xl text-uppercase"
            duration={350}
            spy={true}
            smooth={true}
            to="services"
          >
            {subheading}
          </Link>
        </div>
      </div>
  </header>
)};

export default Intro;

Intro.propTypes = {
  intro: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      image: PropTypes.string,
    })
  )
};