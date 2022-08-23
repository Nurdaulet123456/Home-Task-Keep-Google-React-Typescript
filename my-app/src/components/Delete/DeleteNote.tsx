import React, { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/Context";
import { Delete as DeleteNotes } from "../../types/type";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const DeleteNote: React.FC<DeleteNotes> = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote = (deleteNote: any) => {
    const updatedNotes = deleteNotes.filter(
      (data: any) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prevArr: any) => [deleteNote, ...prevArr]);
  };

  const removeNote = (deleteNote: any) => {
    const updatedNotes = deleteNotes.filter(
      (data: any) => data.id !== deleteNote.id
    );
    const shouldDelete = window.confirm("Delete note forever?");
    if (shouldDelete) {
      setDeleteNotes(updatedNotes);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.heading}</Typography>
        <Typography>{deleteNote.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => removeNote(deleteNote)}
        />
        <Restore
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => restoreNote(deleteNote)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
