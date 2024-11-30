import React from "react";
import styles from "./Contactus.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactus}>
      <h2>Contact us</h2>
      <p>
        To delete your account, please provide the associated email/phone number
        below and mention Delete account in the message box. Note that your
        account and all associated data will be deleted.
      </p>
      <p>
        For more details, refer to the{" "}
        <a
          href="https://inshorts.com/privacy"
          target="_blank"
          rel="noreferrer"
          style={{ color: "blue" }}
        >
          privacy policy
        </a>
        .
      </p>
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
