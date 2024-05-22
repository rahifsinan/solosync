import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import profileImage from './assets/Profile.jpg';

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
        <h2>Create Contact</h2>
        <div className='task-right'>
        <button className="task-button3">Cancel</button> &nbsp;&nbsp;&nbsp;
        <Link to="/addtask">    
        <button className="task-button">Save</button>
        </Link>&nbsp;&nbsp;&nbsp;
        
        
        
        
</div>
         </div>
            
            
            <div className="task-align">
            <h3>Contact Image</h3>
            <div className="profile-container">
                <img className="profile-image" src={profileImage} alt="Profile" />
                </div>
                
            </div><br/><div className="task-align"><h3>Contact Information</h3></div><br/>
            <form action="#"> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label for="firstName" 
                               className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"> 
                            First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label> 
                        <input type="contact-text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5" 
                               placeholder="Enter First Name"
                               required/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label for="firstName" 
                               className="block my-2 text-left text-sm  
                                          font-medium text-gray-900"> 
                            Last Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label> 
                        <input type="contact-text" 
                               className="shadow-sm bg-gray-50 border  
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5"
                               placeholder="Enter Last Name"/> 
                    </div> 
                </div> <br/>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Lead Source  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Department  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Phone  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        DOB  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Company  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div className="task-align">
                <h3>Social Handles</h3> </div>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Facebook  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Instagram  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        LinkedIn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div className="task-align">
                <h3>Address Information</h3> </div>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Street  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>
                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required /> 
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <label for="subject" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"> 
                        Zip  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-text" 
                           className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm "
                          
                           required /> 
                </div> 
                <br/>

                <div> 
                    <label for="email" 
                           className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"> 
                        Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label> 
                    <input type="contact-email" 
                           className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5" 
                           
                           required/> </div>
                
                
                 
            </form>
        </div>
        </div>
        
    );
}

export default App;