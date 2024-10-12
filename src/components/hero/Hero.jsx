import React, { useState } from "react";
import CreateArea from "../createArea/CreateArea";
import Notes from "../notes/Notes";
import "./hero.css";

export default function Hero() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <section className="hero">
      <CreateArea handleAddNote={handleAddNote} />
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} />
    </section>
  );
}
