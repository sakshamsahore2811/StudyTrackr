import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import target from "../../../../public/images/target.png";
import people from "../../../../public/images/people.png";
import brain from "../../../../public/images/brain.png";
const Plan = () =>{
    return(
        <div className={styles.gradientbackground}>
            <div className={styles.heading}>
            Plan
            </div>
            <div className={styles.card1}><div className={styles.target}><Image src={target} height={175} width={225}/><div className={styles.textcard1}>Set goals</div></div></div>
            <div className={styles.card2}><div className={styles.people}><Image src={people} height={200} width={225}/><div className={styles.textcard2}>Build a community</div></div></div>
            <div className={styles.card3}><div className={styles.brain}><Image src={brain} height={200} width={200}/><div className={styles.textcard3}>Boost performance</div></div></div>
        </div>
    )
}

export default Plan;