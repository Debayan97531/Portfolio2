import React from 'react';
import './Contact.css'; // Import CSS file for Contact component

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">Type of Enquiry:</label>
          <select id="enquiry" name="enquiry">
            <option value="general">General Enquiry</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
