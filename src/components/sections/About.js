import React from 'react';
import PropTypes from 'prop-types';

const About = ({ about }) => (
  <div className="row">
    {about.map((person,index) => (
      <div key={index} className="col-sm-6">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={`img/about-${person.name.split(" ").join("-").toLowerCase()}.jpg`} alt={person.name} />
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
      title: PropTypes.string,
      services: PropTypes.string
    })
  )
}

export default About;