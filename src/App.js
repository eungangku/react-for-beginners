import { useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import styles from "./App.module.css";
import Movie from "./routes/MovieList";
import Detail from "./routes/MovieDetail";
import RandomArt from "./routes/RandomArt";
import PomodoroTimer from "./routes/PomodoroTimer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Home() {
  return (
    <Link to="/pomodoro">
      <h1>pomodoro</h1>
    </Link>
  );
}

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Router>
          <Switch>
            <Route path="/detail/:id">
              <ScrollToTop />
              <Detail />
            </Route>
            <Route path="/randomart">
              <ScrollToTop />
              <RandomArt />
            </Route>
            <Route path="/movie">
              <Movie />
            </Route>
            <Route path="/pomodoro/rest">
              <PomodoroTimer type={"rest"} time={60 * 6} />
            </Route>
            <Route path="/pomodoro">
              <PomodoroTimer type={"focus"} time={60 * 30} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
