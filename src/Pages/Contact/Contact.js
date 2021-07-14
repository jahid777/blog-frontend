import React from "react";
import "./Contact.css";
const Contact = () => {
  const handleCLick = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class="contact">
      <div class="contact-title">
        <h1>Contact Form</h1>
      </div>

      <div class="form-container">
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              onClick={handleCLick}
            />
          </div>
          <div class="form-email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onClick={handleCLick}
            />
          </div>
          <div class="form-message">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              onClick={handleCLick}
            ></textarea>
          </div>
          <div class="center-align">
            {/* <button style={{ outLine: "none", border: "none" }} type="submit">
              <a href="/">submit</a>
            </button> */}
            {/* <input className="from-button" type="submit" value="submit" /> */}
            <a href="/">submit</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
