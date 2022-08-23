import React, { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { DataContext } from "../../context/Context";
import { reorder } from "../../utils/utils";

//components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./Empty";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes: React.FC = () => {
  const { notes, setNotes, searchValue } = useContext(DataContext);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided: any) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes
                    .filter(
                      (i: any) =>
                        i.text
                          ?.toLowerCase()
                          .includes(searchValue.toLowerCase()) ||
                        i.heading
                          ?.toLowerCase()
                          .includes(searchValue.toLowerCase())
                    )
                    .map((note: any, index: number) => (
                      <Draggable
                        key={note.id}
                        draggableId={note.id}
                        index={index}
                      >
                        {(provided: any) => (
                          <Grid
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            item
                          >
                            <Note note={note} />
                            {provided.placeholder}
                          </Grid>
                        )}
                      </Draggable>
                    ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
