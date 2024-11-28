// MenuToggle.tsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";
import styles from './MenuToggle.module.css';


const MenuToggle: React.FC = () => {
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
          <IoCloseOutline size={35} color='#000'/> Close
          </button>

          <div className={styles.sidebar}>
            <div className={styles.separator}></div>
            <h6>Categories</h6>
            <ul>
              <li><Link href="/national">Bangladesh</Link></li>
              <li><Link href="/business">Business</Link></li>
              <li><Link href="/politics">Politics</Link></li>
              <li><Link href="/sports">Sports</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/startups">Startups</Link></li>
              <li><Link href="/entertainment">Entertainment</Link></li>
              <li><Link href="/international">International</Link></li>
              <li><Link href="/automobile">Automobile</Link></li>
              <li><Link href="/science">Science</Link></li>
              <li><Link href="/travel">Travel</Link></li>
              <li><Link href="/miscellaneous">Miscellaneous</Link></li>
              <li><Link href="/fashion">Fashion</Link></li>
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/health-fitness">Health & Fitness</Link></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuToggle;
