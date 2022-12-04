import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ team }) => (
  <div className="row">
    {team.map((person, index) => (
      <div key={index} className="col-sm-6">
        <div className="dnd-team-member">
          <GatsbyImage 
            alt={`${person.image}`}
            backgroundColor="#ffffff"
            className="mx-auto"
            image={getImage(person.image)} 
            imgStyle={{ height: '225px', width: '225px' }}
            style={{ height: '225px', width: '225px' }}
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
  team: PropTypes.arrayOf(
    PropTypes.shape({
      person: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  )
}

export default About;