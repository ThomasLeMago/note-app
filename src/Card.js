import styles from "./card.module.css";


export function Card({ key, titleid, noteid, title, note }) {

    function deleteNote() {
        const title = document.getElementById(titleid.toString()).value;

        localStorage.removeItem(title);
    }

    function saveNote() {
        console.log("SAVING (" + titleid + "+" + noteid)

        const title = document.getElementById(titleid).value;
        const note = document.getElementById(noteid).value;

        localStorage.setItem(title, note);
        localStorage.setItem("titles", localStorage.getItem("titles") + " " + title);
    }

    return (
        <div className={styles["card-box"]}>
            <div className={styles["top-row"]}>
                <input id={titleid} className={styles.title} type="text" defaultValue={title} />
                <button className={`${styles.save} ${styles.btn}`} onClick={() => saveNote()}>SAVE</button>
                <button className={`${styles["remove-note"]} ${styles.btn}`} onClick={() => deleteNote()}>DEL</button>
            </div>
            
            <textarea id={noteid} className={styles.note} type="text" />
        </div>
    )

}