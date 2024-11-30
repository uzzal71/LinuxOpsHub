import React, { useState } from "react";
import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Forgot Password</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
