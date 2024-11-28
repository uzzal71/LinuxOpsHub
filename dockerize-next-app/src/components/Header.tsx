import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <MenuToggle />

      <div className={styles.logo}>
        <Link href="/">bdshorts</Link>
      </div>

      <div className={styles.authLinks}>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;
