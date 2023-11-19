import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-leftside">
        <lable>Your feedback helps us improve</lable>
        <p>We are here to help you and we'd love to connect with you</p>
      </div>
      <div className="contact-rightside">
        <div className="input-box">
          <h1>Contact Us</h1>
          <div className="box">
            <div className="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder=" Firstname"
                type="text"
              />
              <label className="usernameLabel" htmlFor="inputField">
                Firstname
              </label>
              <svg viewBox="0 0 448 512" className="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div className="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Lastname"
                type="text"
              />
              <label className="usernameLabel" htmlFor="inputField">
                Lastname
              </label>
              <svg viewBox="0 0 448 512" className="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div className="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Email"
                type="text"
              />
              <label className="usernameLabel" htmlFor="inputField">
                Email
              </label>
              <MdEmail className="userIcon" />
            </div>
            <div className="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Phone"
                type="text"
              />
              <label className="usernameLabel" htmlFor="inputField">
                Phone Number
              </label>
              <FaPhone className="userIcon" />
            </div>
            <div className="inputContainer">
              <textarea
                placeholder="Message"
                required="required"
                id="inputField"
                type="text"
              />
              <label className="usernameLabel" htmlFor="inputField">
                Message
              </label>
              <TbMessageCircle2Filled className="userIcon" />
            </div>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
