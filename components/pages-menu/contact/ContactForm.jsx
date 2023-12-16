"use client"
import axios from "axios";
import DefaultConfig from "app.config.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ContactForm = () => {
  const router = useRouter();

  const sendEmail = async (e) => {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const name = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    var data = {
      email,
      subject,
      name,
      message

    }
    try {
      const response = await axios.post(`${DefaultConfig.url}/message`, data, { headers: { "Content-Type": "application/json" } });
      if (response.status == 201) {
        if (confirm("Thank you for reaching us, we will reply to you in the meantime")) {
          router.push("/");
        }
      }
    } catch (Ex) {
      alert(Ex);
    }
  }
  return (
    <form onSubmit={sendEmail} method="POST">
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Name</label>
          <input
            id="username"
            type="text"
            name="username"
            className="username"
            placeholder="Your Name*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="email"
            placeholder="Your Email*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Subject</label>
          <input
            id="subject"

            type="text"
            name="subject"
            className="subject"
            placeholder="Subject *"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            required=""
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group d-flex align-items-center justify-content-center">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            Send Massage
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ContactForm;
