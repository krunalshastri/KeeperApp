import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [isMounted, setMounted] = useState(true);

  useEffect(() => {
    if(isMounted)
    {
      console.log("Get request!!");
      axios.get("http://localhost:5000/keeperNotes/")
        .then((finalList) => 
            setNotes(finalList.data)
          );
    }

    setMounted(false);
  }, [isMounted]);

  function addNote(newNote) {
    axios.post("http://localhost:5000/keeperNotes/add", newNote)
      .then(() => 
      {
        console.log("Added!!");
        setMounted(true);
      });
  }

  function deleteNote(id) {
    axios.delete("http://localhost:5000/keeperNotes/delete/" + id)
      .then(() => 
      {
        console.log("Deleted!!");
        setMounted(true);
      });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote} 
      />
      {notes.map((noteItem , index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
