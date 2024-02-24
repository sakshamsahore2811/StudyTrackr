import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import pie from "../../../../public/images/piegraph.png";
import bar from "../../../../public/images/bargraph.png";
import line from "../../../../public/images/linegraph.png";

const Visualize= () =>{
    return(
        <div className={styles.gradientbackground}>
        <div className={styles.heading}>Visualize</div>
        <br/>
        <div className={styles.card1}><Image src={pie} height={283} width={283}/></div><br/><div className={styles.textcard1}>Study progress at a glance</div>
        <div className={styles.card2}></div><div className={styles.bar}><Image src={bar} height={233} width={233}/></div><br/><div className={styles.textcard2}>Visual representation</div>
        <div className={styles.card3}></div><div className={styles.line}><Image src={line} height={200} widht={200}/></div><br/><div className={styles.textcard3}>Daily motivation</div>
    </div>
    )
}

export default Visualize;