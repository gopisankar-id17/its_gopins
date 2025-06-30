import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <img src="/pic3.png   " alt="Profile" className="profile-pic" />
      <h1 className="profile-name">Your Name</h1>
      <p className="profile-tagline">Aspiring Developer | Building beautiful projects with React</p>
    </div>
  );
}

export default Profile;
