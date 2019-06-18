import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

const About = ({ about }) => (
  <div className="row">
    {about.map((person,index) => (
      <div key={index} className="col-sm-6">
        <div className="dnd-team-member">
          <PreviewCompatibleImage
            imageInfo={{
              image: person.image,
              alt: person.name,
              imageStyle: {height: '225px', width: '225px'},
              className: 'mx-auto'
            }}
          />
          <h4>{person.name}</h4>
          {person.info.map((info,index) => (
            <p key={index} className="text-muted">{info}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

About.propTypes = {
  about: PropTypes.arrayOf(
    PropTypes.shape({
      person: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  )
}

export default About;