import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [json, setJson] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year")
      .then((res) => res.json())
      .then((json) => setJson(json.data.movies));
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          json.map((item) => {
            return (
              <li key={item.id} id={item.id}>
                <img src={item.medium_cover_image} alt={item.title_long} />
                <Link to={`/detail/${item.id}`}>
                  <h3>{item.title_long}</h3>
                </Link>

                <p>{item.summary}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default Movie;
