import { useState, useEffect } from "react";
import { useCountdownTimer } from "use-countdown-timer";
import prettyMilliseconds from "pretty-ms";
import { Container, Typography, Box, LinearProgress, Card, Button, CardActions } from "@mui/material";

function PomodoroFocus({ type, time }) {
  const focusUrl = "https://eungangku.github.io/react-for-beginners/#/pomodoro";
  const restUrl = "https://eungangku.github.io/react-for-beginners/#/pomodoro/rest";
  const [primaryColor, setPrimaryColor] = useState("#2196f3");

  useEffect(() => {
    if (type === "rest") {
      setPrimaryColor("#4caf50");
    }
  }, []);

  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * time,
    autostart: true,
    onExpire: () => {
      if (type === "focus") {
        window.location.href = restUrl;
      } else {
        window.location.href = focusUrl;
      }
    },
  });

  useEffect(() => (document.title = `${prettyMilliseconds(countdown, { colonNotation: true })} - ${type}`), [countdown]);

  function reload() {
    if (type === "focus") {
      window.location.href = restUrl;
    } else {
      window.location.href = focusUrl;
    }
    window.location.reload();
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: "20px 0" }}>
        <Typography variant="h4" gutterBottom={true} sx={{ fontWeight: "bold" }}>
          Pomodoro Timer
        </Typography>
      </Box>
      <Box sx={{}}>
        <Box sx={{}}>
          <Card variant="outlined" sx={{ maxWidth: "auto", margin: "auto", padding: "0" }}>
            <Box sx={{ padding: "60px 0", background: primaryColor, color: "white" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                {prettyMilliseconds(countdown, { colonNotation: true })}
              </Typography>
            </Box>
            <LinearProgress color={type === "rest" ? "success" : "primary"} variant="determinate" value={Math.round((countdown / (1000 * time)) * 100)} />
            <CardActions>
              <a href={focusUrl} style={{ textDecoration: "none" }} onClick={reload}>
                <Button variant={type === "focus" ? "contained" : "text"} color="primary">
                  Focus
                </Button>
              </a>
              <a href={restUrl} style={{ textDecoration: "none" }} onClick={reload}>
                <Button variant={type === "focus" ? "text" : "contained"} color="success">
                  Rest
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ margin: "15px 0" }}>
            <CardActions>
              <Button onClick={start}>Start</Button>
              <Button color="error" onClick={pause}>
                Stop
              </Button>
              <Button color="warning" onClick={reset}>
                Reset
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default PomodoroFocus;
