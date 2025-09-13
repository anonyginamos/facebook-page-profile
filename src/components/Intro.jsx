import React from "react";
import "../styles/Intro.css";

const Intro = ({ bio, work, education, city }) => (
  <div className="intro-card">

    {/* Title */}
    <h3 className="intro-title">Intro</h3>

    {/* Bio Section */}
    <p className="intro-bio">{bio}</p>

    {/* Info List */}
    <ul className="intro-list">

      {/* Work */}
      <li className="intro-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="intro-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <span>{work}</span>
      </li>

      {/* Education */}
      <li className="intro-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="intro-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H6a2 2 0 01-2-2V4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{education}</span>
      </li>

      {/* City */}
      <li className="intro-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="intro-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{city}</span>
      </li>

    </ul>

    {/* Edit Button */}
    <button className="intro-button">Edit Profile</button>
    
  </div>
);

export default Intro;
