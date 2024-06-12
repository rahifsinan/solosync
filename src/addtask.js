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
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

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
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
                            <button className="task-button" onClick={handleSubmit}>Save</button>
                            {/* <button className="task-button2" onClick={handleSubmit}>Save & Add another</button> */}
                            <button className="task-button3" onClick={handleReset}>Cancel</button>
                        </div>
                    </div>

                    <div className="task-align">
                        <h3>Task Information</h3>
                    </div>
                    <form action="#" method="get" onSubmit={handleSubmit}>
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
                                onChange={() => {
                                    setIsImportant(!isImportant);
                                    if (!isImportant) {
                                        setShowPopup(true);
                                    } else {
                                        setShowPopup(false);
                                    }
                                }}
                            /> <br/>{showPopup && (
                                <div className="popup">
                                    On
                                    <button onClick={() => setShowPopup(false)}>04/04/2024&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
	<path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
	<path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
</svg></button> at
                                    <button onClick={() => setShowPopup(false)}>12:30&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z" />
</svg></button><br/><br/><br/>
Notify&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pop up        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
</svg><br/><br/>

                            {/* <button className="task-button2" onClick={handleSubmit}>Save & Add another</button> */}
                            <button className="task-button3" onClick={handleReset}>Cancel</button>
                            <button className="task-button" onClick={handleSubmit}>Done</button>

                                </div> 
                            )}
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

                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
