import { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import styles from "./App.module.css";
import Movie from "./routes/MovieList";
import Detail from "./routes/MovieDetail";
import RandomArt from "./routes/RandomArt";
import PomodoroFocus from "./components/PomodoroFocus";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Home() {
  return <h1>home</h1>;
}

function App() {
  return (
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
            <PomodoroFocus type={"rest"} time={60 * 6} />
          </Route>
          <Route path="/pomodoro">
            <PomodoroFocus type={"focus"} time={60 * 30} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
