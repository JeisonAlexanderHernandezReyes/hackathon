const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");


dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 3000;

const appServer = express();

/* Creating a logger that will log all requests to the console. */
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const logger = appServer.use(morgan('combined', { stream: accessLogStream }))
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: false }));

appServer.post("/getUserPdf", (req, res) => {
  logger(req, res, function (err) {
    if (err) return done(err);
    res.render('index', { title: 'Express' });
    res.setHeader("content-type", "text/plain");
    res.end("You need to specify a route");
  });
});


const userRoutes = require("./routes/users.router");
appServer.use("/user", userRoutes);

/**
 * Start server
 */

 appServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});