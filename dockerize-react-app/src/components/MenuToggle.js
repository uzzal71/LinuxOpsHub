import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
                <Link to="/national">Bangladesh</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
              <li>
                <Link to="/startups">Startups</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/international">International</Link>
              </li>
              <li>
                <Link to="/automobile">Automobile</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/travel">Travel</Link>
              </li>
              <li>
                <Link to="/miscellaneous">Miscellaneous</Link>
              </li>
              <li>
                <Link to="/fashion">Fashion</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/health-fitness">Health & Fitness</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuToggle;
