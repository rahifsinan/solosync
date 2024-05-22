import React from 'react';
import { Button,Card} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MeetingsTable() {
  const Calls = [
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin',  Phone: '07425865423', Email: 'kins@kigs.dev'},
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin',  Phone: '07425865423', Email: 'kins@kigs.dev'},
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin',  Phone: '07425865423',  Email: 'kins@kigs.dev'}
  ];

  return (
    <div>                       
           <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
	<path fill="currentColor" d="M5.561 2.551a.84.84 0 0 0-1.033-.514c-.973.3-1.653 1.135-1.507 2.101A8.7 8.7 0 0 0 4.092 7.18a8.8 8.8 0 0 0 2.083 2.445c.754.61 1.812.442 2.558-.258A.85.85 0 0 0 8.81 8.21l-.534-.653a.845.845 0 0 0-.91-.272l-1.232.39l-.215-.222a5 5 0 0 1-.706-.929a4.8 4.8 0 0 1-.446-1.079l-.083-.295l.95-.875a.86.86 0 0 0 .221-.935zm-1.327-1.47a1.84 1.84 0 0 1 2.264 1.121l.293.788a1.86 1.86 0 0 1-.48 2.019l-.49.451c.063.174.148.373.258.566c.11.19.238.363.355.504l.63-.2a1.845 1.845 0 0 1 1.985.593l.534.653a1.85 1.85 0 0 1-.166 2.52c-.994.933-2.617 1.32-3.87.306a9.8 9.8 0 0 1-2.32-2.722a9.7 9.7 0 0 1-1.195-3.393c-.24-1.593.903-2.806 2.202-3.205" />
</svg> Calls
        </div>
        <div className='meeting-right'>
            <Link to="/addmeetings">
            <button className="button-meeting">Create Call&nbsp;&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
	<path fill="white" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
</svg></button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <select className='action-meeting'>
              <option label="Action"></option>
              <option>Add</option>
              <option>Delete</option>
            </select>
          </div>
        </div>
      </header>
      <div className="scrollable-container">
        <div className="main-div">
          <Card className="main-card">
            <div className='menu-icon'>
              <div className='header-left'>
                <select className='drop-meeting'>
                  <option value="pages">10 Records Per Page</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
                  <path fill="currentColor" fillRule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clipRule="evenodd" />
                </svg>&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
                  <path fill="currentColor" fillRule="evenodd" d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636" clipRule="evenodd" />
                </svg>
              </div>
            </div>
<h2 className="calls-head">Scheduled Calls</h2>
      <table className='meeting-table'>
        <thead>
          <tr>
            <th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Company_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
            <th>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
	<path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
</svg></th>
          </tr>
        </thead>
        <tbody>
          {Calls.map(call => (
            <tr key={call.id}>
              <td> 
      <input type="checkbox" />
    {call.Name}</td>
              <td>{call.Company_name}</td>
              <td>{call.Department}</td>
              <td>{call.Phone}</td>
              <td>{call.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Card>
        </div>
      </div>
    </div>
  );
}

export default MeetingsTable;
