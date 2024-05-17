// App.js

import React from 'react';
import Card from "@mui/material/Card";
import './App.css';

const App = () => {
  return (
    
    <div className="main-card">
                  <div className="meet-align">
            <h3>Meetings 1</h3>
            <div className='task-right'>
            <button className="task-button">Edit</button>&nbsp;&nbsp;&nbsp;
            <button className="task-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
</svg></button>&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            
            </div>
            </div>
      <div className="flex-container">
        <Card className='meet-card'>
        <h1>My Card Collection</h1>
        
          </Card>
          &nbsp; &nbsp; &nbsp; &nbsp;
        <Card>
        <h1>My Card Collection</h1>
          </Card>
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

export default App;
