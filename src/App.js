import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import styles from "./App.module.css";
import Button from "./components/Button";
import Todo from "./components/Todo";
import Crypto from "./components/Crypto";
import Movie from "./routes/MovieList";
import Detail from "./routes/MovieDetail";
import RandomArt from "./routes/RandomArt";

function App() {
  const [counter, setcounter] = useState(0);
  const addCount = () => {
    setcounter((prev) => prev + 1);
  };
  const [keyword, setkeyword] = useState("");
  const searchKeyword = (event) => {
    setkeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword.length > 5) {
      console.log("Search " + keyword);
    }
  }, [keyword]);

  useEffect(() => {
    if (counter != 0) {
      console.log("counter changed!");
    }
  }, [counter]);

  return (
    <div>
      <h1 className={styles.title}>
        <a href="/react-for-beginners">EGK Tools</a>
      </h1>
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
            <Route path="/">
              <Movie />
            </Route>
          </Switch>
        </Router>
      </div>

      <div className={styles.container}>
        <h3>{keyword}</h3>
        <input onChange={searchKeyword} className={styles.input} placeholder="Search"></input>
      </div>

      <div className={styles.container}>
        <h3>{counter}</h3>
        <Button onclick={addCount} text={"Add Count"} />
      </div>

      <div className={styles.container}>
        <Todo />
      </div>

      <div className={styles.container}>
        <Crypto />
      </div>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
