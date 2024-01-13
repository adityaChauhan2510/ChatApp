import {
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useContext } from "react";

import { SocketContext } from "../SocketContext";

const theme = createTheme();

export default function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  // console.log("Stream:", stream);
  // console.log("My Video Ref:", myVideo);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
          },
        }}
      >
        {/* own video */}
        {myVideo && (
          <>
            <Paper
              sx={{
                padding: "10px",
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  {name || "Name"}
                </Typography>
                <video
                  ref={myVideo}
                  playsInline
                  muted
                  autoPlay
                  style={{
                    width: "450px",
                  }}
                />
              </Grid>
            </Paper>
          </>
        )}

        {/* others video */}
        {callAccepted && !callEnded && (
          <Paper
            sx={{
              padding: "10px",
              border: "2px solid black",
              margin: "10px",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {call.name || "Name"}
              </Typography>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{
                  width: "450px",
                }}
              />
            </Grid>
          </Paper>
        )}
      </Grid>
    </ThemeProvider>
  );
}
