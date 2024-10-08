import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './navbar';
import Header from './header';
import Sidebar from './sidebar';
import "./App.css"; // Import your CSS file here
import Home from "./home";
import Meetings from "./meetings";
import Tasks from "./tasks";
import Contacts from "./contacts";
import Calls from "./calls";
import Leads from "./leads";
import Deals from "./deals";
import Analytics from "./analytics";
import Note from './note';
import Addtask from './addtask';
import Addmeetings from './addmeetings';
import Addcontact from './addcontact';
import Meetingdetails from './meetingdetails';
import Taskdetails from './taskdetails';
import Viewcontacts from './viewcontacts';
import Login from './login';

// Define Note component separately

function App() {
  // Assuming notes array is defined and initialized somewhere
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Home');

  // Dummy notes array for demonstration
  const note = [
    { id: 1, text: "Note 1" },
    { id: 2, text: "Note 2" },
    { id: 3, text: "Note 3" }
  ];

  return (
    <div>
      <Navbar />
      <Header selectedOption={selectedOption} />
      
      <Router>
        <Sidebar />
        <div className="app-container">
         
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/addnote" element={<Note />} />
            <Route path="/addtask" element={<Addtask />} />
            <Route path="/addmeetings" element={<Addmeetings />} />
            <Route path="/addcontact" element={<Addcontact />} />
            <Route path="/meetingdetails" element={<Meetingdetails />} />
            <Route path="/taskdetails" element={<Taskdetails />} />
            <Route path="/viewcontacts" element={<Viewcontacts />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
