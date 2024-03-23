import React from "react";
import styles from "./style.module.css";

const AboutUs = () =>{
    return(
            <div className={styles.gradientbackground} id="aboutus">
                <div className={styles.heading}>About Us</div>
            <div className={styles.conatiner}>StudyTracker is a one stop application for visualizing, tracking and planning all your study progress.<br/><br/> Feel motivated, build a community and make your study routine productive using our platform with its simple and unique user interface designed precisely for a productive time.<br/><br/> Contact Us regarding any issues or feedback, email : sakshamsahore@gmail.com  <br/> Thank you.</div>
            <div className={styles.footer}>
                Made with &hearts; in IN
            </div>
            </div>
    )
}

export default AboutUs;