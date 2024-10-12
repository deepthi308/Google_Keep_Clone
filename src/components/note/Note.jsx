import DeleteIcon from "@mui/icons-material/Delete";
import "./note.css";

export default function Note({ index, note, handleDeleteNote }) {
  const { title, content } = note;
  return (
    <li className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete-button" onClick={() => handleDeleteNote(index)}>
        <DeleteIcon style={{ fontSize: "2rem" }} />
      </button>
    </li>
  );
}
