import React from 'react';
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MeetingsTable() {
  const Contacts = [
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin', Phone: '07425865423', Email: 'kins@kigs.dev' },
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin', Phone: '07425865423', Email: 'kins@kigs.dev' },
    { Name: 'Kins Marrier', Company_name: 'Kings Dev', Department: 'Admin', Phone: '07425865423', Email: 'kins@kigs.dev' }
  ];

  return (
    <div>
      <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor" d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447M10.882 6H6v14h12V6h-5a1 1 0 0 1-1.894.447zm2.618 8a2.5 2.5 0 0 1 2.5 2.5v.5a1 1 0 1 1-2 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.5a1 1 0 1 1-2 0v-.5a2.5 2.5 0 0 1 2.5-2.5zM12 9a2 2 0 1 1 0 4a2 2 0 0 1 0-4" />
              </g>
            </svg> Contacts
          </div>
          <div className='meeting-right'>
            <Link to="/addcontact">
              <button className="button-meeting">+ &nbsp;&nbsp;&nbsp;&nbsp;Add Contact</button>
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
                  <th>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Company_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                  <th>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                      {contact.Name}
                    </td>
                    <td>{contact.Company_name}</td>
                    <td>{contact.Department}</td>
                    <td>{contact.Phone}</td>
                    <td>{contact.Email}</td>
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
