import React from "react";
import { Link } from "react-router-dom";
import styles from "./BodyTop.module.css";

const BodyTop = () => {
  return (
    <div className={styles.appinfo}>
      <div>
        <span>For the best experience use </span>
        <Link
          to="https://bdshorts.com/mobile"
          style={{ color: "white", appearance: "none", fontWeight: "600" }}
        >
          bdshorts
        </Link>
        <span> app on your smartphone</span>
      </div>
      <div className={styles.store}>
        <Link to="#">
          <img src="/appstore.png" alt="app store" height={52} width={140} />
        </Link>
        <Link to="#">
          <img src="/playstore.png" alt="play store" height={52} width={140} />
        </Link>
      </div>
    </div>
  );
};

export default BodyTop;
