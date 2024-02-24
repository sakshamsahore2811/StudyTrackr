import React from 'react';
import styles from "./style.module.css";
import Image from "next/image";

import hi from "../../../../public/images/hi.png";
const Header = () => {
    return(
        <div>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <div className={styles.gradientbackground}><div className={styles.text}><div className={styles.animatedtext1}>Welcome to StudyTracker <Image src={hi} height={60} width={60}/></div></div> <br/>
        <div className={styles.textsmall}><div className={styles.animatedtext2}><p>Today matters.</p></div></div>
        </div>
        </div>
        )
}

export default Header;