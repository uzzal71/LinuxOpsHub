import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.postCard}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage:
              'url("https://nis-gs.pix.in/inshorts/images/v1/variants/webp/xs/2024/11_nov/3_sun/img_1730619829549_463.webp")',
          }}
        ></div>
      </div>
      <div className={styles.postContent}>
        <header className={styles.header}>
          <h2 className={styles.postTitle}>
            ট্রাম্পের মন্তব্য আমাদের অনেককে বিব্রত করেছে: ধর্ম উপদেষ্টা
          </h2>
          <div className={styles.postInfo}>
            <span className={styles.author}>Short by Nasir Uddin</span>
            <time className={styles.time} dateTime="2024-11-03T09:51:59.000Z">
              03:51 pm on Sunday, 3 November 2024
            </time>
          </div>
        </header>
        <p className={styles.description}>
          সাভারে ড্যাফোডিল ইসলামিক সেন্টারের ‘সুন্নাহ ফাউন্ডেশন কনফারেন্স
          বাংলাদেশ-২০২৪’–এর উদ্বোধনীতে ধর্ম উপদেষ্টা আ ফ ম খালিদ হোসেন বলেছেন,
          বাংলাদেশে সকল ধর্মাবলম্বীদের অধিকার সুরক্ষিত এবং সংখ্যালঘুদের ওপর
          নির্যাতনের অভিযোগ অসত্য। তিনি ট্রাম্পের সাম্প্রতিক মন্তব্যকে রাজনৈতিক
          উদ্দেশ্যপ্রণোদিত বলে উল্লেখ করেন এবং সংখ্যালঘুদের নিরাপত্তা নিশ্চিত
          করার অঙ্গীকার পুনর্ব্যক্ত করেন।
        </p>
        <footer className={styles.footer}>
          <span className={styles.readMore}>
            Read more at{" "}
            <a
              href="https://www.prothomalo.com/bangladesh/district/tb3sezcgna"
              target="_blank"
              rel="noreferrer"
            >
              Prothom Alo
            </a>
          </span>
        </footer>
      </div>
    </article>
  );
};

export default Post;
