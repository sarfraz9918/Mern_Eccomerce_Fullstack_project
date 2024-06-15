import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormData((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
        // Here you can handle form submission, e.g., send the data to a server.
        navigate('/home'); // Navigate to a thank-you page or some other page.
    };

    return (
        <div className="container">
            <div className="left-section">
                <h2>Contact Us</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2847498873043!2d77.43031987521807!3d23.23272297902701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435605f269e1%3A0xe67446598d15ad0e!2sCybrom%20Technology%20-%20Python%20%7C%20Java%20%7C%20MERN%20%7C%20C%20C%2B%2B%20%7C%20Data%20Science%20%7C%20Machine%20Learning%20%7C%20Ethical%20Hacking%20%7C%20Job%20oriented%20Training!5e0!3m2!1sen!2sin!4v1707051220422!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="right-section">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    /><br />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /><br />
                    <input
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        className="input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    /><br />
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="input"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ height: "80px" }}
                    /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
