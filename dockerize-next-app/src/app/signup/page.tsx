import Link from 'next/link';
import React from 'react';
import styles from './Signup.module.css';

const Signup: React.FC = () => {
  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>

      <form className={styles.signupForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />

        <button type="submit" className={styles.signupButton}>Sign Up</button>

        <p className={styles.loginPrompt}>
          Already have an account? <Link href="/login" className={styles.loginLink}>Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup;
