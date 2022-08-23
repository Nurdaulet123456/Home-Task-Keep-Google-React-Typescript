import React, { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/Context";

//components
import DeleteNote from "./DeleteNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes: React.FC = () => {
  const { deleteNotes, searchValue } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container>
          {deleteNotes
            .filter(
              (i: any) =>
                i.text?.toLowerCase().includes(searchValue.toLowerCase()) ||
                i.heading?.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((deleteNote: any) => (
              <Grid item key={deleteNote.id}>
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;
