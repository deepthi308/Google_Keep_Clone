import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import "./createArea.css";

export default function CreateArea({ handleAddNote }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleNoteChange = ({ target: { name, value } }) => {
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmitNote = () => {
    if (!note.title || !note.content) {
      return;
    }
    handleAddNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <section className="create-area">
      <form className="form">
        {isExpanded && (
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={handleNoteChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
          value={note.content}
          onChange={handleNoteChange}
          onClick={() => setIsExpanded((prevState) => true)}
        ></textarea>
        <Zoom in={isExpanded} onClick={handleSubmitNote}>
          <Fab className="add-button">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </section>
  );
}
