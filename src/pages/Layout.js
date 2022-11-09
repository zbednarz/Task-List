import theme from "../styles/styles";

const Layout=()=>{

return (
<ThemeProvider theme={theme}>
      
      <MyAppBar color = "secondary">
        <Toolbar>
          <TransitionsModal />
          <Typography variant="h5">Task List</Typography>
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