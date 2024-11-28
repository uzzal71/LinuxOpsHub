import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <div className={styles.logo}>
            <a href="/">bdshorts</a>
          </div>
          <p>bdshorts pte. Ltd.</p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.menu}>
          <a href="/contact-us">Contact Us</a>
          <a href="/terms-conditions">Terms & conditions</a>
          <a href="/privacy-policies">Privacy Policies</a>
        </div>
        <div className={styles.socialIcon}>
          <a href="/about">
            <FaFacebookF />
          </a>
          <a href="/about">
            <FaTwitter />
          </a>
          <a href="/about">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
