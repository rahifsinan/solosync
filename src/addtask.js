import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

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
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");

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
            about
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
    };

    return (
        <div className='task-page'> 
        <div className="task-form">
        <div className="task-align">
        <h2>Add New Task</h2>
        <div className='task-right'> <Link to="/addtask">
            
        <button className="task-button">Save</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/addtask">
        <button className="task-button2">Save & Add another</button></Link>
        &nbsp;&nbsp;&nbsp;
        <button className="task-button2">Cancel</button>
        
        
</div>
         </div>
            
            <fieldset>
            <div className="task-align">
            <h3>Task Information</h3>
            </div>
                <form action="#" method="get">
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Subject"
                        required
                    />
                    <br/>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Due Date"
                        required
                    />
                    <br/>
                    
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Contact"
                        required
                    />
                    <br/>
                  
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Status"
                        required
                    />
                    
                    
                    <br/>
                  
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Reminder"
                        required
                    />
            <div className="task-align">
            <h3>Description Information</h3>
            </div>
            <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Description"
                        required
                    />
                    
                    

                </form>
            </fieldset>
        </div>
        </div>
    );
}

export default App;