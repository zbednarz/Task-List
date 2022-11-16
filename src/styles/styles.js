import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#00adb5",
  secondary: "rgb(5, 5, 120)",
  orange: "#fb8c00",
  white: "#FFF",
  darkblue: "rgb(2, 7, 85)",
  green: "#00c853",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    orange: {
      main: Colors.orange,
    },
    white: {
      main: Colors.white,
    },
    blue: {
      main: Colors.blue,
    },
    green: {
      main: Colors.green,
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          background: "white",
          margin: "10px",
          borderRadius: 15,
        },
      },
    },
  },
});

export default theme;
