import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name,
            email,
            message
        };

        axios.post('http://192.168.1.7:5000/send', data)
            .then(response => {
                setStatus('Message Sent Successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setLoading(false);
            })
            .catch(error => {
                setStatus('Message Failed to Send!');
                setLoading(false);
            });
    };

    return (
        <div className="contact">
            <div className="divider"></div>
            <div className="contactText">Contact</div>
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={`submitButton ${loading ? 'loading' : ''}`}>
                    <span>Submit</span>
                    <div className="loader"></div>
                </button>
            </form>
            {status && <p className='statusText'>{status}</p>}
        </div>
    );
};

export default Contact;
