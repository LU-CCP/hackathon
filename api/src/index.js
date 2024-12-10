const restify = require("restify");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const corsMiddleware = require("restify-cors-middleware");
const Router = require("restify-router").Router;
const router = new Router();
require("dotenv").config();
const { API_PORT } = process.env;

const usersRoutes = require("./routes/users");
const eventsRoutes = require("./routes/events");
const officesRoutes = require("./routes/offices");

// Settings
const server = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

// For tokens
const jsonWebToken = require("jsonwebtoken");
const restifyJwtCommunity = require("restify-jwt-community");

//Middlewares
server.use(morgan("dev"));
server.pre(cors.preflight);
server.use(cors.actual);

server.use(bodyParser.json());
server.use(
  restifyJwtCommunity({ secret: "my-secret-key" }).unless({
    path: ["/user/token"]
  })
);

server.use((req, res, next) => {
  if (req.url === "/user/token") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jsonWebToken.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

//Routes
router.add("/user", usersRoutes);
router.add("/event", eventsRoutes);
router.add("/offices", officesRoutes);
router.applyRoutes(server);

server.listen(API_PORT, function() {
  console.log("Server running on port", API_PORT);
});

module.exports = server;
