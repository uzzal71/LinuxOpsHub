import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>

      <form className={styles.loginForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className={styles.loginButton}>
          Login
        </button>

        <button type="button" className={styles.googleButton}>
          Login with Google
        </button>

        <div className={styles.linksContainer}>
          <Link to="/forget-password" className={styles.forgotPassword}>
            Forgot Password?
          </Link>
          <Link to="/signup" className={styles.createAccount}>
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
