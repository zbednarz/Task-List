import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { MyMenuItem } from "../styles/MyBottomNavigation";
import { MyBoxBottomNavigation } from "../styles/MyBottomNavigation";
import { MyLink } from "../styles/MyBottomNavigation";

export default function SimpleBottomNavigation() {
  return (
    <MyBoxBottomNavigation>
      <MyMenuItem>
        <MyLink to="/">Home</MyLink>
        <MyLink to="form">Form</MyLink>
        <MyLink to="todolist">Todo List</MyLink>
        <MyLink to="todo">Todo</MyLink>
      </MyMenuItem>
    </MyBoxBottomNavigation>
  );
}
