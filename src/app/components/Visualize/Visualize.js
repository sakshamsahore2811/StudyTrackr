import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import pie from "../../../../public/images/piegraph.png";
import bar from "../../../../public/images/bargraph.png";
import calendar from "../../../../public/images/calendar.png";
import Link from 'next/link';

const Visualize= () =>{
    return(
        <>
        <div className={styles.heading}>Record, Track, Plan</div>
        <br/>
        <div className={styles.cardscontainer}>
            <div className={styles.card}>
                <div className={styles.pie}>
        <Image src={pie} height={100} width={100}/></div><br/><div className={styles.cardtext}>Study progress at a glance</div>
        </div>
        <div className={styles.card}>
        <div className={styles.bar}><Image src={bar} height={150} width={100}/></div><br/><div className={styles.cardtext}>Visual representation</div>
        </div>
        <div className={styles.card}>
            <div className={styles.line}><Image src={calendar} height={100} width={100}/></div><br/><div className={styles.cardtext}>Daily motivation</div>
        </div>
        </div>
        <div className={styles.try}>
            <div className={styles.button}>
                 <a href="https://productivo-application.vercel.app/">Try it out</a>
            </div>
            </div>
    </>
    )
}

export default Visualize;