import * as React from "react";
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
      </MyMenuItem>
    </MyBoxBottomNavigation>
  );
}
