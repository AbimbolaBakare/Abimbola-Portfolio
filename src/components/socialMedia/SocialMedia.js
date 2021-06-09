import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.yahoo ? (
        <a
          href={`mailto:${socialMediaLinks.yahoo}`}
          className="icon-button yahoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-yahoo"></i>
          <span className='email'>deomolara@yahoo.com</span>
        </a>
      ) : null}
      
    </div>
  );
}
