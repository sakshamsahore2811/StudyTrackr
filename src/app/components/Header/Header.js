import React from 'react';
import styles from "./style.module.css";
import Image from "next/image";

import hi from "../../../../public/images/hi.png";
const Header = () => {
    return(
        <div className={styles.gradientbackground}>
        <div className={styles.navbar}>
        <div className={styles.leftlinks}>
            <a href="/">Privacy Policy</a>
            <a href="/">Blog</a>
        </div>
        <div className={styles.centerlink}>
            Productivo AI
        </div>
        <div className={styles.rightlinks}>
        <div className={styles.aboutus}>
            <a href="#aboutus">About us</a>
        </div>  
        <div className={styles.signup}>
            <a href="/">Sign Up</a>
        </div>
        <div className={styles.login}>
            <a href="/">Login</a>
        </div>
        </div>
        </div>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <div className={styles.text}><div className={styles.animatedtext1}>Make the day productive</div></div> <br/>
        <div className={styles.textsmall}><div className={styles.animatedtext2}>Today matters.</div></div>
        </div>

        
        )
}

export default Header;