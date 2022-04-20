import Button from "../components/Button";
import Crypto from "../components/Crypto";
import Todo from "../components/Todo";

function LecturePractice() {
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

export default LecturePractice;
