import React from 'react';
import { Link } from 'react-scroll';

const Intro = class extends React.Component {
  render() {
    const { title, heading, subheading, image } = this.props;
    return (
      <header
        id="intro"
        className="dnd-intro dnd-branding"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
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
    );
  }
};

export default Intro;