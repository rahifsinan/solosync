import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [host, setHost] = useState("");
    const [participants, setParticipants] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            host,
            participants,
            description
        );
        setShowModal(false);
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setHost("");
        setParticipants("");
        setDescription("");
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        
        <div className="task-page">
            <div className='header-left'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" />
        </svg>Add meetings
      </div>
            
            <Modal show={showModal} handleClose={closeModal}>
                <div className="meet-form">
                    <div className="task-align">
                        <h3>Meeting Information</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="New Meeting"
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Location"
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="From"
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="To"
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            name="host"
                            id="host"
                            value={host}
                            onChange={(e) => setHost(e.target.value)}
                            placeholder="Host"
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            name="participants"
                            id="participants"
                            value={participants}
                            onChange={(e) => setParticipants(e.target.value)}
                            placeholder="Participants"
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            required
                        />
                        <br /><br />
                        <button type="button" className="task-button3" onClick={handleReset}>Cancel</button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="task-button">Save</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default App;
