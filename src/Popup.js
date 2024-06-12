import React from 'react';
import profileImage from './assets/Profile.jpg';

const Popup = ({ onClose }) => (
  <div className="popup-prof">
    <div className="popup-inner">
    <div className="trt">
                <img className="profile-image" src={profileImage} alt="Profile" />
                <div className="side-part-task">
              <div className="profile-name">Rahif Sinan KM</div>
              <a href="">rahifsinankm@gmail.com</a> <br/>  <br/> <br/>    
      <button className="button-prof" onClick={onClose}>LOGOUT</button></div></div>
    </div>
  </div>
);

export default Popup;