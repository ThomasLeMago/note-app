import React from "react";
import styles from "./navbar.module.css";


export function Navbar({ addnote }) {

    
    function addNote(e) {
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
        document.documentElement.style.setProperty('--card-bg', randomColor);
        addnote()
    }

    /*
    function search() {

    }
    */

    return (
        <div className={styles["nav-div"]}>
            <button className={styles["add-btn"]} onClick={(e) => addNote(e)}>+</button>
            <div className={styles.search}>
                <input type="text" className={styles.searchq}></input>
                <button className={styles["search-btn"]}>SEARCH</button>
            </div>
        </div>
    )
}