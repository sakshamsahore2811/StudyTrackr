import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import clock from "../../../../public/images/clock.png";
import calendar from "../../../../public/images/calendar.png";
import task from "../../../../public/images/task.png";
const Track = () =>{
    return(
        <div className={styles.gradientbackground}>
        <div className={styles.heading}>
            Track
            <br/>
            </div>
            <div className={styles.card1}><div className={styles.clock}><Image src={clock} height={200} width={200}/></div></div>
            <div className={styles.textcard1}>Precise productivity tracking</div>
            <div className={styles.card2}><div className={styles.calendar}><Image src={calendar} height={200} width={200}/></div></div>
            <div className={styles.textcard2}>Daily progress reports</div>
            <div className={styles.card3}><div className={styles.tasks}><Image src={task} height={200} width={200}/></div></div>
            <div className={styles.textcard3}>Efficient workflow</div>
        </div>
    )
}

export default Track;