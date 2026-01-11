import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ContactForm.css';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Add access key for Web3Forms
        const formDataWithKey = {
            access_key: "fbe93011-e8d5-4031-9c42-690e2c4f6f88",
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "New message from portfolio",
            message: formData.message,
            to: "adithyakumar.u@gmail.com"
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithKey)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            placeholder="Your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            <>Sending...</>
                        ) : (
                            <>
                                <FaPaperPlane /> Send Message
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <motion.div
                            className="status-message success"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            className="status-message error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <FaExclamationCircle /> Oops! Something went wrong. Please try again.
                        </motion.div>
                    )}
                </form>
            </motion.div>
        </section>
    );
}

export default ContactForm;
