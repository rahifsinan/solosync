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
            <h3>Meeting Information</h3>
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
                        placeholder="New Meeting"
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
                        placeholder="Location"
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
                        placeholder="From"
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
                        placeholder="To"
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
                        placeholder="Host"
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
                      placeholder="Participants"
                      required
                  />
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
                    /><br/><br/>
             <div className='task-right'>
             <button className="task-button3">Cancel</button>&nbsp;&nbsp;&nbsp;
              <Link to="/addmeetings">
            <button className="task-button">Save</button></Link>&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            
            </div>
            
                    
                    

                </form>
        </div>
        </div>
    );
}

export default App;