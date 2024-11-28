import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
            <div className={styles.logo}>
            <Link href="/">bdshorts</Link>
            </div>
            <p>bdshorts pte. Ltd.</p>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.menu}>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/terms-conditions">Terms & conditions</Link>
            <Link href="/privacy-policies">Privacy Policies</Link>
        </div>
        <div className={styles.socialIcon}>
            <Link href="/about"><FaFacebookF /></Link>
            <Link href="/about"><FaTwitter /></Link>
            <Link href="/about"><FaInstagram /></Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
