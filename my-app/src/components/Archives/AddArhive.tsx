import React, { useContext } from "react";
import { CardContent, CardActions, Typography } from "@mui/material";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { DataContext } from "../../context/Context";
import { Archives } from "../../types/type";
import { StyledCard } from "../../styles/Notes";

const Arhive: React.FC<Archives> = ({ archive }) => {
  const { archiveNotes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const unArchiveNote = (archive: any) => {
    const updatedNotes = archiveNotes.filter(
      (data: any) => data.id !== archive.id
    );
    setAcrchiveNotes(updatedNotes);
    setNotes((prevArr: any) => [archive, ...prevArr]);
  };

  const deleteNote = (archive: any) => {
    const updatedNotes = archiveNotes.filter(
      (data: any) => data.id !== archive.id
    );
    setAcrchiveNotes(updatedNotes);
    setDeleteNotes((prevArr: any) => [archive, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => deleteNote(archive)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Arhive;
