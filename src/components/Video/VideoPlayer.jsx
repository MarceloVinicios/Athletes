/* import React, { useRef, useEffect } from "react";
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
    <div className="container">
      <video
        ref={videoRef}
        style={{maxWidth:"100%", maxHeight:"500px"}}
        className="video-js vjs-custom-theme"
        playsInline
      ></video>
    </div>
  );
};

export default VideoPlayer; */
