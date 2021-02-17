import React from 'react';
import "../App.css";

import TKH_Logo from "../images/TKH_Logo.png";
import TKH_Logo_Allpurple from "../images/TKH_Logo_Allpurple.png";

const Contact = () => {
    return (
        <div className="contact">
          <h1>Contact</h1>
          <div className="tkh">
            <div className="tkh-info">
            <a href="https://www.theknowledgehouse.org/"><img className="tkh-logo" src={TKH_Logo} alt="profile" /></a>
            <div className="links">
            
              <div>
                <h2>This project was built by Web Development Fellows from The Knowledge House</h2>
                <p className="tkh-text">The Knowledge House empowers and sustains a talent pipeline of technologists, entrepreneurs, and digital leaders, who will uplift their communities out of poverty.<br/> The Knowledge House is a social change organization. The Knowledge House passionately believe that young people should be given the opportunity to succeed regardless of their financial circumstances or ethnic background. The Knowledge House educates, empowers, and mentors New York City residents, from low-income communities with the technology and workplace skills needed to launch a successful career in the technology industry. <br/> Through our digital skills programs, The Knowledge House is transforming the tech industry by building an army of talented workers equipped with the latest skills needed in today’s economy.</p>
              </div>
              <p>More information at:</p>
              <a href="https://www.theknowledgehouse.org/">
                <img className="TKH_NameLogo" src={TKH_Logo_Allpurple} />
              </a>
              </div>
        </div>
        </div>
        </div>
    );
}

export default Contact;