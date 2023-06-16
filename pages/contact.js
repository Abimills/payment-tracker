import React from "react";
import styles from "../styles/Home.module.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send Message</button>
        <div className={styles.personalInfo}>
          <p>contact information</p>
          <div className={styles.iconInfo}>
            <MdOutlineMarkEmailUnread />
            <p> abelbeyene373@gmail.com</p>
          </div>
          <div className={styles.iconInfo}>
            <FiPhoneCall />
            <p> +31687995855</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
