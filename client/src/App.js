import {
  Typography,
  AppBar,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppBar
          position="static"
          color="inherit"
          sx={{
            borderRadius: 15,
            margin: "30px 100px",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "600px",
            border: "2px solid black",
            [theme.breakpoints.down("xs")]: {
              width: "90%",
            },
          }}
        >
          <Typography variant="h3" align="center">
            Chat-App
          </Typography>
        </AppBar>

        <VideoPlayer />

        <Options>
          <Notifications />
        </Options>
      </Box>
    </ThemeProvider>
  );
}

export default App;
