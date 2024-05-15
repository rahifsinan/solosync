import React from 'react';
import { Button} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

function MeetingsTable() {
  const meetings = [
    { title: 'Webinar', startTime: '15-03-2024 14:30 IST', endTime: '15-03-2024 15:30 IST', contact_name: 'John Doe', host: 'Jc & Co', id: 1 },
    { title: 'Webinar', startTime: '15-03-2024 14:30 IST', endTime: '15-03-2024 15:30 IST', contact_name: 'John Doe', host: 'Jc & Co', id: 2 },
    { title: 'Webinar', startTime: '15-03-2024 14:30 IST', endTime: '15-03-2024 15:30 IST', contact_name: 'John Doe', host: 'Jc & Co', id: 3 }
  ];

  return (
    <div>
           <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" />
</svg>Meetings
        </div>
        <div className='meeting-right'>  <Link to="/addmeetings">
        <button className="button-meeting">+ &nbsp;&nbsp;&nbsp;&nbsp;Add Meeting</button></Link>
        &nbsp;&nbsp;&nbsp;
        <select className='action-meeting'>

<option label="Action"></option>
<option>Add</option>
<option>Delete</option></select>
         </div>
        </div>
        </header>
        <div>

<select className='drop-meeting'>

  <option value="pages">10 Records Per Page</option>

  

</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
	<path fill="currentColor" fill-rule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clip-rule="evenodd" />
</svg>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
	<path fill="currentColor" fill-rule="evenodd" d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636" clip-rule="evenodd" />
</svg>

</div>
      <table className='meeting-table'>
        <thead>
          <tr>
            <th>Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>From&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Contact Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Host&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
          </tr>
        </thead>
        <tbody>
          {meetings.map(meeting => (
            <tr key={meeting.id}> 
              <td> 
      <input type="checkbox" />
    {meeting.title}</td>
              <td>{meeting.startTime}</td>
              <td>{meeting.endTime}</td>
              <td>{meeting.contact_name}</td>
              <td>{meeting.host}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MeetingsTable;
