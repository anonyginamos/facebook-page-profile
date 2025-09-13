import React from "react";
import "../styles/Photos.css";

const Photos = ({ photos }) => (
  <div className="photos-card">

    {/* Title */}
    <h3 className="photos-title">Photos</h3>

    {/* Photos Grid */}
    <div className="photos-grid">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="photo-item"
        />
      ))}
    </div>

  </div>
);

export default Photos;
