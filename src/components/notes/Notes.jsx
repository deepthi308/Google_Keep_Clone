import Note from "../note/Note";
import "./notes.css";

export default function Notes({ notes, handleDeleteNote }) {
  return (
    <div className="notes-container">
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              index={index}
              note={note}
              handleDeleteNote={handleDeleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}
