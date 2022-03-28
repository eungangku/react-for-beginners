import PropTypes from "prop-types";
import styles from "./App.module.css";
import Button from "./Button";

function App() {
  return (
    <div>
      <h1 className={styles.title}>EGK Tools</h1>
      <Button text={"Copy"} />
      <Button text={"Paste"} />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
