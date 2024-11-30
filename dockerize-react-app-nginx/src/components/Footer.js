import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <div className={styles.logo}>
            <Link to="/">bdshorts</Link>
          </div>
          <p>bdshorts pte. Ltd.</p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.menu}>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/terms-conditions">Terms & conditions</Link>
          <Link to="/privacy-policies">Privacy Policies</Link>
        </div>
        <div className={styles.socialIcon}>
          <Link to="/about">
            <FaFacebookF />
          </Link>
          <Link to="/about">
            <FaTwitter />
          </Link>
          <Link to="/about">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
