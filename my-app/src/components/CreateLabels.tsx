import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { LabelOutlined as Label } from "@mui/icons-material";

const CreateLabels: React.FC = () => {
  const { label } = useContext(DataContext);

  return (
    <>
      {label.map((item: any) => (
        <ListItem button key={item.id}>
          <ListItemIcon style={{ alignItems: "center" }}>
            <Label />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </>
  );
};

export default CreateLabels;
