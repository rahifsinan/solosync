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
        <h2>Create Contact</h2>
        <div className='task-right'>
        <button className="task-button3">Cancel</button> &nbsp;&nbsp;&nbsp;
        <Link to="/addtask">    
        <button className="task-button">Save</button>
        </Link>&nbsp;&nbsp;&nbsp;
        
        
        
        
</div>
         </div>
            
            
            <div className="task-align">
            <h3>Contact Image</h3>         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	       <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" />
         </svg>
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
                           
                           required placeholder="DD/MM/YYYY"/> 
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
                           
                           required placeholder="DD/MM/YYYY"/> 
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
                           
                           required placeholder="DD/MM/YYYY"/> 
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
                           
                           required placeholder="DD/MM/YYYY"/> </div>
                
                
                 
            </form>
        </div>
        </div>
    );
}

export default App;