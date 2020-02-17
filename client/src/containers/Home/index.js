import React, { useState, useEffect, useRef } from "react";
import { Video } from "../../services/api";
import videojs from "video.js";
import config from "../../utils/configCopy";

const Home = () => {
  const [stream, setStream] = useState(false);
  const [videoJsOptions, setVideoJsOptions] = useState(false);
  const videoNode = useRef(null);
  let player = null;

  const getStream = async () => {
    // const res = await Video.fetchStream();
    setStream(true);
    setVideoJsOptions({
      autoplay: false,
      controls: true,
      sources: [
        {
          src:
            "http://127.0.0.1:" +
            config.rtmp_server.http.port +
            "/live/index.m3u8",
          type: "application/x-mpegURL"
        }
      ],
      fluid: true
    });
  };

  useEffect(() => {
    const s = stream;
    debugger;
    if (stream) {
      player = videojs(videoNode.current, videoJsOptions, () => {
        console.log("onPlayerReady");
      });
    } else {
      getStream();
    }
  }, [stream, videoJsOptions]);

  return (
    <>
      //{" "}
      <div className="row">
        {/* <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5"> */}
        {stream ? (
          <div data-vjs-player>
            <video ref={videoNode} className="video-js vjs-big-play-centered" />
          </div>
        ) : (
          " Loading ... "
        )}
        {/* </div> */}
        //{" "}
      </div>
    </>
  );
};

export default Home;
