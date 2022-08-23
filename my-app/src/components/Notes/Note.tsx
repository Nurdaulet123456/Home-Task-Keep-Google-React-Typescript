import React, { useContext } from "react";
import { StyledCard } from "../../styles/Notes";
import { CardContent, CardActions, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { DataContext } from "../../context/Context";
import { Note as Notes } from "../../types/type";

const Note: React.FC<Notes> = ({ note }) => {
  const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const archiveNote = (note: any) => {
    const updatedNotes = notes.filter((data: any) => data.id !== note.id);
    setNotes(updatedNotes);
    setAcrchiveNotes((prevArr: any) => [note, ...prevArr]);
  };

  const deleteNote = (note: any) => {
    const updatedNotes = notes.filter((data: any) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr: any) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => archiveNote(note)}
        />
        <Delete
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
