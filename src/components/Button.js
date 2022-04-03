import styles from "./Button.module.css";

function Button({ text, onclick }) {
  return (
    <div className={styles.btnContainer}>
      <button onClick={onclick} className={styles.btn}>
        {text}
      </button>
    </div>
  );
}

export default Button;
