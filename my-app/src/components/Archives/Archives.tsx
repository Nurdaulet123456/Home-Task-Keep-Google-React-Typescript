import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";

import { DataContext } from "../../context/Context";
import { DrawerHeader } from "../../styles/Header";

//components
import Archive from "./AddArhive";

const Archives: React.FC = () => {
  const { archiveNotes, searchValue } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container>
          {archiveNotes
            .filter(
              (i: any) =>
                i.text?.toLowerCase().includes(searchValue.toLowerCase()) ||
                i.heading?.toLowerCase().includes(searchValue.toLowerCase())
            )
            ?.map((archive: any) => (
              <Grid item key={archive.id}>
                <Archive archive={archive} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
