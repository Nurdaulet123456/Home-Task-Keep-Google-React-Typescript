import React from "react";
import { useState, useRef, useContext } from "react";

import { TextField, ClickAwayListener } from "@mui/material";

import { DataContext } from "../../context/Context";
import { v4 as uuid } from "uuid";
import { INotes } from "../../types/interfaces";
import { Container } from "../../styles/Notes";

const notes = {
  id: "",
  heading: "",
  text: "",
} as INotes;

const Form: React.FC = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState<INotes>({ ...notes, id: uuid() });

  const { setNotes } = useContext(DataContext);

  const containerRef = useRef(null);

  const handleClickAway = () => {
    setShowTextField(false);
    (containerRef.current as any).style.minheight = "30px";
    setAddNote({ ...notes, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr: any) => [addNote, ...prevArr]);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    (containerRef.current as any).style.minheight = "70px";
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedNote = {
      ...addNote,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={onTextChange}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={onTextChange}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
