import { useState } from "react";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import styles from "./app.module.css"

let lastId = -1;

export default function App() {

  const [notes, setNotes] = useState([])


  function addNote(title, note) { 
    console.log(title)
    setNotes([...notes, <Card key={lastId + 1} titleid={lastId + 1} noteid={lastId + 2} title={title} note={note} />])
    lastId += 2;
  }
  
  function loadNotes() {
    const titles = localStorage.getItem("titles").split(" ")

    titles.forEach(title => {
      addNote(title, localStorage.getItem(title));
    });

  }

  return (
    <>
      <button onClick={loadNotes}>load</button>
      <Navbar addnote={() => addNote()}/>
      <div id="notes" className={styles.notes}>
        {notes.map(note => {
          return (
            <Card key={note.props.titleid} titleid={note.props.titleid} noteid={note.props.noteid} title={note.props.title} note={note.note}/>
          )
        })}
      </div>
    
    </>
  );
}

