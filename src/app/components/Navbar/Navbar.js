import React from "react";
import styles from "./style.module.css";
const Navbar = () =>{
    return(
    <div className={styles.navbar}>
        <div className={styles.leftlinks}>
            <a href="/">Privacy Policy</a>
            <a href="/">Blog</a>
        </div>
        <div className={styles.centerlink}>
            Scholar Mate
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
        
    )
}

export default Navbar;
