const NodeMediaServer = require("node-media-server"),
  config = require("./config").rtmp_server;

nms = new NodeMediaServer(config);

nms.on("prePublish", async (id, StreamPath, args) => {
  console.log(
    "[NodeEvent on prePublish]",
    `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
  );
});

module.exports = nms;
