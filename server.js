const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const journals = require("./routes/api/journals");
const cors = require("cors");
const fs = require("fs");
const https = require("https");

const app = express();
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/journals", journals);

const port = 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log("db server running");
  });
} else {
  // Certificate
  const privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/hugary.dev/privkey.pem",
    "utf8"
  );
  const certificate = fs.readFileSync(
    "/etc/letsencrypt/live/hugary.dev/cert.pem",
    "utf8"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/hugary.dev/chain.pem",
    "utf8"
  );

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  // Starting servers
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(port, () => {
    console.log("HTTPS server running");
  });
}
