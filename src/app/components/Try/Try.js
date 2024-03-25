import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const Try = () =>{
    return(
        <div className={styles.gradientbackground}>
            <div className={styles.box}></div>
            <div className={styles.heading}>
                 <Link href="https://productivo-application.vercel.app/">Try it out</Link>
                </div>
                </div>
    )
}

export default Try;