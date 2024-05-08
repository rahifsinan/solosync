import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
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


function App() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Home');

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Header selectedOption={selectedOption} />
      
      <Router>
      <Sidebar />
        <div className="app-container">
          <ul className="App-header">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/meetings"></Link>
            </li>
            <li>
              <Link to="/tasks"></Link>
            </li>
            <li>
              <Link to="/contacts"></Link>
            </li>
            <li>
              <Link to="/calls"></Link>
            </li>
            <li>
              <Link to="/leads"></Link>
            </li>
            <li>
              <Link to="/deals"></Link>
            </li>
            <li>
              <Link to="/analytics"></Link>
            </li>
          </ul>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
