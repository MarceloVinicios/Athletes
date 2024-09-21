import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./StyleVideo.css";

const VideoPlayer = ({ media }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoOptions = {
      autoplay: true,
      muted: true,
      loop: true,
      controls: true,
      sources: [
        {
          src: media,
        },
      ],
    };

    const player = videojs(videoRef.current, videoOptions);

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [media]);

  return (
    <div className="container" style={{ position: "relative", paddingBottom: "56.25%", height: "500px" }}>
      <video
        ref={videoRef}
        className="video-js vjs-custom-theme vjs-big-play-centered"
        playsInline
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
      ></video>
    </div>
  );
};

export default VideoPlayer;
