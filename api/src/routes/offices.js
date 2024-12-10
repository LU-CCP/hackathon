const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");
const sqlConfig = require("../config/database");

const { getAllOffices } = require("../services/offices");

router.get("", async (req, res) => {
  res.send(200, await getAllOffices());
});

module.exports = router;
