import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import Button from "./Button";

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
      <h1 className={styles.title}>EGK Tools</h1>
      <div className={styles.container}>
        <h3>{keyword}</h3>
        <input onChange={searchKeyword} className={styles.input} placeholder="Search"></input>
      </div>
      <div className={styles.container}>
        <h3>{counter}</h3>
        <Button onclick={addCount} text={"Add Count"} />
      </div>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
