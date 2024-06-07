import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Switch from "react-switch";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about,
            isImportant
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setIsImportant(false);
    };

    return (
        <div className="scrollable-container">
            <div className="task-page">
                <div className="task-form">
                    <header className="header">
                        <div className="menu-icon">
                            <div className="header-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1" />
                                        <path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
                                    </g>
                                </svg> Tasks | Add Task
                            </div>
                        </div>
                    </header>

                    <div className="task-align">
                        <h2>Add New Task</h2>
                        <div className="task-right">
                            <Link to="/addtask">
                                <button className="task-button">Save</button>
                            </Link>&nbsp;&nbsp;&nbsp;
                            <Link to="/addtask">
                                <button className="task-button2">Save & Add another</button>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <button className="task-button3">Cancel</button>
                        </div>
                    </div>

                    <div className="task-align">
                        <h3>Task Information</h3>
                    </div>
                    <form action="#" method="get">
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Subject"
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Due Date"
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Contact"
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Status"
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Reminder"
                            required
                        />
                        <div className="toggle-right">
                            
                                <Switch
                                    checked={isImportant}
                                    onChange={() => setIsImportant(!isImportant)}
                                />
                            
                        </div>
                        <div className="task-align">
                            <h3>Description Information</h3>
                        </div>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Description"
                            required
                        />
                        <br />

                        <br /><br /><br /><br /><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
