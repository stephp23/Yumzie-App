import React from "react";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import StephaniePena from "../images/StephaniePena.jpg";
import jahaziel from "../images/jahaziel.jpg";

const Team = () => {
  
  const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const GitHub = <FontAwesomeIcon icon={faGithub} />;
	
	return (
      <div className="team">
        <h1>Yumzie Team</h1>
        <div className="avatar">
          <div className="team-role">
            <img src={StephaniePena} alt="profile" />
            <h3>Front End Developer</h3>
          <a href="https://www.linkedin.com/in/stephanie-a-peña-1132bb16a/">{LinkedIn}</a>
          <a href="https://github.com/stephp23">{GitHub}</a>
          </div>
          <div className="team-role">
            <img src={jahaziel} alt="profile" />
            <h3>UI UX Engineer</h3>
            <a href="https://www.linkedin.com/in/jahazielbenisrael/">{LinkedIn}</a>
            <a href="https://github.com/blaquebeardcoder">{GitHub}</a>
          </div>
        
        </div>
      </div>
    );
}

export default Team;