import React from "react";
import styles from "../styles/FooterTop.module.css";
import { Twitter } from "./SvgIcons";
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {SiTwitter} from "react-icons/si"
import {HiPhone} from "react-icons/hi"

export default function FooterTop() {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <i className="fa-brands fa-twitter"></i>
          <Twitter />

          {/* <Twitter /> */}
          <SiTwitter/>

          @jcrew_help
        </div>
        <div className={styles.inner}>
          <i className="fa-solid fa-phone"></i>

          <BsTelephoneFill/>

          <HiPhone/>

          1 434 385 5775
        </div>
        <div className={styles.inner}>
          <i className="fa-solid fa-envelope"></i>

          <MdEmail/>
          Email Us
        </div>
      </div>
    </div>
  );
}
