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
      axios.get("https://keeper-app-mern.herokuapp.com/keeperNotes/")
        .then((finalList) => 
            setNotes(finalList.data)
          );
    }

    setMounted(false);
  }, [isMounted]);

  function addNote(newNote) {
    axios.post("https://keeper-app-mern.herokuapp.com/keeperNotes/add", newNote)
      .then(() => 
      {
        console.log("Added!!");
        setMounted(true);
      });
  }

  function deleteNote(id) {
    axios.delete("https://keeper-app-mern.herokuapp.com/keeperNotes/delete/" + id)
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
