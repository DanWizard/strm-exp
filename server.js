const express = require("express"),
  bodyParse = require("body-parser"),
  config = require("./config"),
  flash = require("connect-flash"),
  port = 3333,
  app = express();

app.use(express.static("public"));
app.use(flash());
// app.use(require("cookie-parser")());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));
const node_media_server = require("./mediaServer");

// and call run() method at the end
// file where we start our web server

node_media_server.run();

// app.use(
//   Session({
//     store: new FileStore({
//       path: "./server/sessions"
//     }),
//     secret: config.server.secret,
//     maxAge: Date().now + 60 * 1000 * 30
//   })
// );

app.listen(port, () => console.log(`App listening on ${port}!`));
