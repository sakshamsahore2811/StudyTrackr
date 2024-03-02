import React from "react";
import styles from "./style.module.css";
const Navbar = () =>{
    return(
    <div>
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
        
    )
}

export default Navbar;
