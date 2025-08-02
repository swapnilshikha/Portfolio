import React from "react";
import "./contactme.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_CONTACT_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      console.log(data);
      toast.success(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(data.message);
    }
  };

  return (
    <div className="contact" id="contactme">
      <div className="contact-title">
        <h1>
          {" "}
          <span>Get</span> in touch
        </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects , so feel free to
            reach out
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>bhakatswapnilshikha@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 6200428337</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Jamshedpur, Jharkhand</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Your Email" name="email" />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
