import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./MenuToggle.module.css";

const MenuToggle = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.menuToggle}>
      <div className={styles.menuIcon} onClick={toggleSidebar}>
        <FaBars size={24} /> <span>Menu</span>
      </div>

      {isSidebarOpen && (
        <>
          {/* Close Button Positioned at the Top of the Sidebar */}
          <button onClick={toggleSidebar} className={styles.closeButton}>
            <IoCloseOutline size={35} color="#000" /> Close
          </button>

          <div className={styles.sidebar}>
            <div className={styles.separator}></div>
            <h6>Categories</h6>
            <ul>
              <li>
                <a href="/national">Bangladesh</a>
              </li>
              <li>
                <a href="/business">Business</a>
              </li>
              <li>
                <a href="/politics">Politics</a>
              </li>
              <li>
                <a href="/sports">Sports</a>
              </li>
              <li>
                <a href="/technology">Technology</a>
              </li>
              <li>
                <a href="/startups">Startups</a>
              </li>
              <li>
                <a href="/entertainment">Entertainment</a>
              </li>
              <li>
                <a href="/international">International</a>
              </li>
              <li>
                <a href="/automobile">Automobile</a>
              </li>
              <li>
                <a href="/science">Science</a>
              </li>
              <li>
                <a href="/travel">Travel</a>
              </li>
              <li>
                <a href="/miscellaneous">Miscellaneous</a>
              </li>
              <li>
                <a href="/fashion">Fashion</a>
              </li>
              <li>
                <a href="/education">Education</a>
              </li>
              <li>
                <a href="/health-fitness">Health & Fitness</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuToggle;
