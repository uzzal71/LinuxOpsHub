import Link from 'next/link'
import React from 'react'
import styles from './Login.module.css'

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      
      <form className={styles.loginForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className={styles.loginButton}>Login</button>

        <button type="button" className={styles.googleButton}>Login with Google</button>

        <div className={styles.linksContainer}>
          <Link href="/forget-password" className={styles.forgotPassword}>Forgot Password?</Link>
          <Link href="/signup" className={styles.createAccount}>Create an Account</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
