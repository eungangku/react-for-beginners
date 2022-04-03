import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../components/YoutubeEmbed";
import styles from "./MovieDetail.module.css";

function Detail() {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [json, setJson] = useState([]);
  const [imgloading, setImgloading] = useState(true);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((json) => setJson(json.data.movie));
    setLoading(false);
  }, []);

  const onimgLoad = () => {
    setImgloading(false);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <div className={styles.mediaContainer}>
            <img onLoad={onimgLoad} src={json.large_cover_image} alt={json.title_long} />
            {imgloading ? null : <YoutubeEmbed height={"750"} videoId={json.yt_trailer_code} />}
            <div className={styles.overlayShadow}></div>
          </div>
          <h1>{json.title_long}</h1>
          <p>{json.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
