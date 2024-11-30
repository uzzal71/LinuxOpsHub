import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <MenuToggle />

      <div className={styles.logo}>
        <Link to="/">bdshorts</Link>
      </div>

      <div className={styles.authLinks}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;
