import React, { useState, useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  EditOutlined as Edit,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { INavList } from "../types/interfaces";
import { v4 as uuid } from "uuid";
import { DataContext } from "../context/Context";
import { style, useStyles, Input, StyledInputBase } from "../styles/Modal";
import CreateLabels from "./CreateLabels";

const navList = [
  { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
  { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
  { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
] as INavList[];

const NavList: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { setLabel, itemLabel, setItemLabel } = useContext(DataContext);

  const handleCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newLabel = {
      id: uuid(),
      text: itemLabel,
    };

    if (e.key === "Enter") {
      setLabel((prev: any) => [newLabel, ...prev]);

      setItemLabel("");
    }
  };

  const changeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemLabel(e.target.value);
  };
  return (
    <List>
      {navList?.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={`${list.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}

      <CreateLabels />

      <ListItem button onClick={handleOpen}>
        <ListItemIcon style={{ alignItems: "center" }}>
          <Edit />
        </ListItemIcon>
        <ListItemText primary={"Edit"} />
      </ListItem>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Label
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Input>
              <StyledInputBase
                className={classes.input}
                placeholder="Create Labels"
                value={itemLabel}
                onChange={changeLabel}
                onKeyDown={handleCreate}
              />
            </Input>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CreateLabels />
          </Typography>
        </Box>
      </Modal>
    </List>
  );
};

export default NavList;
