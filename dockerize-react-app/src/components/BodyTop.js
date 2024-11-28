import React from "react";
import styles from "./BodyTop.module.css";

const BodyTop = () => {
  return (
    <div className={styles.appinfo}>
      <div>
        <span>For the best experience use </span>
        <a
          href="https://bdshorts.com/mobile"
          style={{ color: "white", appearance: "none", fontWeight: "600" }}
        >
          bdshorts
        </a>
        <span> app on your smartphone</span>
      </div>
      <div className={styles.store}>
        <a href="#">
          <img src="/appstore.png" alt="app store" height={52} width={140} />
        </a>
        <a href="#">
          <img src="/playstore.png" alt="play store" height={52} width={140} />
        </a>
      </div>
    </div>
  );
};

export default BodyTop;
