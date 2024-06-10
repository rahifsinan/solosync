import React from 'react';
import profileImage from './assets/Profile.jpg';

const Popup = ({ onClose }) => (
  <div className="popup-prof">
    <div className="popup-inner">
    <div className="trt">
                <img className="profile-image" src={profileImage} alt="Profile" />
                <div className="side-part-task">
              <div className="profile-name">David&nbsp;Luka</div>
              <a href="">View&nbsp;Profile</a>
              </div></div>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Popup;