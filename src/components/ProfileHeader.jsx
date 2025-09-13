import React from "react";
import "../styles/ProfileHeader.css";

const ProfileHeader = ({ name, profilePic, coverPhoto, friendsCount }) => (
  <div className="profile-header-container">

    {/* Cover Photo */}
    <div className="cover-photo-container">
      <img src={coverPhoto} alt="Cover" className="cover-photo" />
    </div>

    {/* Profile Section */}
    <div className="profile-section">

      {/* Left: Profile Picture & Info */}
      <div className="profile-left">
        <div className="profile-pic-wrapper">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="friends-count">{friendsCount} friends</p>
        </div>
      </div>

      {/* Right: Profile Actions */}
      <div className="profile-actions">
        <button className="profile-btn primary">Add Friend</button>
        <button className="profile-btn secondary">+ Story</button>
      </div>

    </div>
  </div>
);

export default ProfileHeader;
