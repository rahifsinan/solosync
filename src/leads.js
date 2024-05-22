import React from 'react';
import { Button, Card } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MeetingsTable() {
  const leads = [
    { leadname: 'Marco Jose', Company: 'Beauty Saloon', Email: 'marcojose@gmail.com', Phone: '02416566872', Leadsource: 'Advertisement', id: 1 },
    { leadname: 'Marco Jose', Company: 'Beauty Saloon', Email: 'marcojose@gmail.com', Phone: '02416566872', Leadsource: 'Advertisement', id: 2 },
    { leadname: 'Marco Jose', Company: 'Beauty Saloon', Email: 'marcojose@gmail.com', Phone: '02416566872', Leadsource: 'Advertisement', id: 3 }
  ];

  return (
<div className='task-page'>                       
           <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-1H2v-3c0-2.7 5.3-4 8-4c.6 0 1.3.1 2.1.2c-.2.6-.1 1.3.1 1.9c-.7-.1-1.5-.2-2.2-.2c-3 0-6.1 1.5-6.1 2.1v1.1h10.6l.5.6zM10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg> Leads
        </div>
        
        <div className='meeting-right'>
            <Link to="/addtask">
              <button className="button-meeting">+ &nbsp;&nbsp;&nbsp;&nbsp;Add Leads</button>
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
            <table className='meeting-table'>
              <thead>
                <tr>
                  <th>Lead Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Company&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Lead Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.leadname}</td>
                    <td>{lead.Company}</td>
                    <td>{lead.Email}</td>
                    <td>{lead.Phone}</td>
                    <td>{lead.Leadsource}</td>
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
