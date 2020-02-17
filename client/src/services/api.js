import { get, post, put, destroy } from "axios";
import config from "../utils/configCopy";

export const Video = {
  fetchStream: get(
    "http://127.0.0.1:" + config.rtmp_server.http.port + "/api/streams"
  )
};
