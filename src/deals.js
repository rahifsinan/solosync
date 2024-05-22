import React from 'react';
import { Button, Card } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MeetingsTable() {
  const leads = [
    { id: 1, dealname: 'Commercialpress', amount: '₹45,000.00', closingdate: '18-03-2024', contactname: 'David John', companyname: 'David&Co' },
    { id: 2, dealname: 'RetailDeal', amount: '₹55,000.00', closingdate: '20-04-2024', contactname: 'Alice Smith', companyname: 'Smith&Co' },
    { id: 3, dealname: 'WholesaleDeal', amount: '₹65,000.00', closingdate: '22-05-2024', contactname: 'John Doe', companyname: 'Doe&Co' }
  ];

  return (
    <div className='task-page'>                       
    <header className='header'>
 <div className='menu-icon'>
   <div className='header-left'>
   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg> Deals
 </div>
 
 <div className='meeting-right'>
     <Link to="/addtask">
       <button className="button-meeting">+ &nbsp;&nbsp;&nbsp;&nbsp;Add Deals</button>
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
                <th>Deal Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                  </svg>
                </th>
                <th>Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                  </svg>
                </th>
                <th>Closing Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                  </svg>
                </th>
                <th>Contact Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                  </svg>
                </th>
                <th>Company Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.dealname}</td>
                  <td>{lead.amount}</td>
                  <td>{lead.closingdate}</td>
                  <td>{lead.contactname}</td>
                  <td>{lead.companyname}</td>
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
