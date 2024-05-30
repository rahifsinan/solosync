import React from 'react';
import Card from "@mui/material/Card";
import './App.css';
import profileImage from './assets/Profile.jpg';

const App = () => {
  return (
    <div className="scrollable-container">
      <div className="main-div">
        <Card className="main-card">
          <div className="meet-align">
            <h3>Task 1</h3>
            <div className='task-right'>
              <button className="task-button">Edit</button>&nbsp;&nbsp;&nbsp;
              <button className="task-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-container">
            <Card className='meet-card'>
            <div className='task-right'>
            <button className="task-button">close&nbsp;task</button>
            </div>
            <div className="trt">
                Priority
                <div className="side-part-task">
                 High
        
                </div>
              </div>
              <div className="trt">
                Due&nbsp;Date
                <div className="side-part-task">
                 12/05/2024
        
                </div>
              </div>
              <div className="trt">
                Status
                <div className="side-part-task">
                 Not&nbsp;Completed
        
                </div>
              </div>
              <div className="trt">
                Contact
                <div className="side-part-task">
                David&nbsp;Luka
        
                </div>
              </div>
            </Card>
            <Card className='meet-card2'></Card>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Card className='profile-card'>
              <div className="profile-container">
                <div className="trt">
                <img className="profile-image" src={profileImage} alt="Profile" />
                <div className="side-part-task">
              <div className="profile-name">David&nbsp;Luka</div>
              <a href="">View&nbsp;Profile</a>
              </div></div><br/><br/><br/>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256">
	<path fill="currentColor" d="M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;King LLC<br/><br/>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
	<path fill="currentColor" d="m5.966 4.49l-.827.742a5 5 0 0 0 .455 1.073a4.7 4.7 0 0 0 .722.922l1.071-.33c.6-.185 1.255.005 1.654.48l.61.726a1.47 1.47 0 0 1-.137 2.042c-.995.908-2.527 1.215-3.674.314a10.4 10.4 0 0 1-2.516-2.87A10 10 0 0 1 2.03 4.013c-.22-1.422.821-2.56 2.119-2.948c.774-.232 1.6.166 1.884.908l.335.875c.22.576.062 1.225-.402 1.641" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;555-555-5555<br/><br/>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
	<path fill="currentColor" d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z" />
	<path fill="currentColor" d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;david@kings.in<br/><br/><br/>
<h4>Open Activities</h4>
              </div>
            </Card>
            
            
          </div>
        </Card>
        
      </div>
    </div>
  );
};

export default App;
