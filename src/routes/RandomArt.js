import { useEffect, useState } from "react";
import FastAverageColor from "fast-average-color";
import styles from "./RandomArt.module.css";

function RandomArt() {
  const [tryCount, setTryCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [averageColor, setAverageColor] = useState("");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function getAverageColor(url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url + "?not-from-cache-please";

    const fac = new FastAverageColor();
    fac
      .getColorAsync(image, { algorithm: "sqrt" })
      .then((color) => {
        setAverageColor(color.hex);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }
  //  fetch api
  useEffect(() => {
    const id = getRandomInt(1, 853585);
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.primaryImageSmall) {
          console.log(data.primaryImageSmall);
          setData(data);
          setImgUrl(data.primaryImageSmall);
          getAverageColor(data.primaryImageSmall);
        } else {
          setTryCount((prev) => prev + 1);
        }
      })
      .catch((e) => console.log("wtf " + e));
  }, [tryCount]);

  const onContainerClick = () => {
    setTryCount((prev) => prev + 1);
  };
  return (
    <div onClick={onContainerClick} className={styles.container} style={{ backgroundColor: averageColor }}>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <img src={imgUrl} />
          <div className={styles.desc}>
            <h1 className={styles.title}>{data.title}</h1>
            <h3 className={styles.date}>{data.objectDate}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomArt;
