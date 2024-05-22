import React from 'react';
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

function MeetingsTable() {
  const Tasks = [
    { Subject: 'Register for upcoming Secret school webinar', Due_Date: '15-03-2024', Status: 'Not Started',  Priority: 'High', contact_name: 'John Doe'},
    { Subject: 'Complete the novo-x poster', Due_Date: '15-03-2024', Status: 'Not Started',  Priority: 'Highest', contact_name: 'Mark'},
    { Subject: 'Client meeting with Abraham', Due_Date: '15-03-2024', Status: 'Not Started',  Priority: 'Low',  contact_name: 'Abraham Kuriyan'}
  ];

  return (
    <div className='task-page'>                       
           <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1" />
		<path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
	</g>
</svg>  Tasks 
        </div>
        
        <div className='meeting-right'> <Link to="/addtask">
          
        <button className="button-meeting">+ &nbsp;&nbsp;&nbsp;&nbsp;Add Task</button></Link>
        &nbsp;&nbsp;&nbsp;
        <select className='action-meeting'>

<option label="Action"></option>
<option>Add</option>
<option>Delete</option></select>
         </div>
        </div>
        </header>
        <div className="scrollable-container">
        <div className="main-div">
        <div className='menu-icon'>
              <div className='header-left'>
          

<select className='drop-meeting'>

  <option value="pages">10 Records Per Page</option>

  

</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
	<path fill="currentColor" fill-rule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clip-rule="evenodd" />
</svg>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
	<path fill="currentColor" fill-rule="evenodd" d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636" clip-rule="evenodd" />
</svg>
</div>
</div>

</div>

      <table className='meeting-table'>
        <thead>
          <tr>
            <th>Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Due_Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Priority&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Contact Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map(task => (
            <tr key={task.id}>
              <td> 
      <input type="checkbox" />
    {task.Subject}</td>
              <td>{task.Due_Date}</td>
              <td>{task.Status}</td>
              <td>{task.Priority}</td>
              <td>{task.contact_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
    
  );
}

export default MeetingsTable;
