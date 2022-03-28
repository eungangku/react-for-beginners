import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default Button;
