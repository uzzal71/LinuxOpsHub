import React from "react";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <MenuToggle />

      <div className={styles.logo}>
        <a href="/">bdshorts</a>
      </div>

      <div className={styles.authLinks}>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </header>
  );
};

export default Header;
