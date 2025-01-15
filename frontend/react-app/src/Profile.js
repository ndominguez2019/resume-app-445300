import React from 'react';
import './Profile.css';
import profilePicture from './images/Profile Picture Nicolas Dominguez.jpeg';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-banner">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
        </div>
      </div>
    </div>
  );
}

export default Profile;