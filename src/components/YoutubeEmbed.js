function YoutubeEmbed({ height, videoId }) {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height={height}
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=1`}
      ></iframe>
    </div>
  );
}

export default YoutubeEmbed;
