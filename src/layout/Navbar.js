import theme from "../styles/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { MyAvatar } from "../styles/MyAvatar";
import { ThemeProvider } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { MyAppBar } from "../styles/MyAppBar";
import { MyLink } from "../styles/MyNavbar";

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar>
        <Toolbar>
          <MyLink to="/">Home</MyLink>
          <MyLink to="form">Form</MyLink>
          <MyLink to="todolist">Todo List</MyLink>
        </Toolbar>
        <Box>
          <Tooltip title="Zbigniew Bednarz">
            <MyAvatar src="photo.jpg" />
          </Tooltip>
        </Box>
      </MyAppBar>
    </ThemeProvider>
  );
};

export default Navbar;
