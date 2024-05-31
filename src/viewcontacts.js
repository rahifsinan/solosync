import React from 'react';
import Card from "@mui/material/Card";
import './App.css';
import profileImage from './assets/Profile.jpg';

const App = () => {
  return (
    <div className="scrollable-container">
      <div className="main-div">
        <Card className="main-card">
          
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            
              <div className="profile-container">
              <div className="trt">
                <img className="profile-image" src={profileImage} alt="Profile" />
                <div className="side-part-cont">
              <div className="profile-name">David&nbsp;Luka</div>
              King LLP
              </div></div><br/><br/><br/>

              </div>
           
            
            <Card className='meet-card2'></Card>
         
        </Card>
        
      </div>
    </div>
  );
};

export default App;
