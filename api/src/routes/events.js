const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");
const sqlConfig = require("../config/database");

const {
  getAllEvents,
  getAllTodayEvents,
  getEvent,
  setEvent,
  updateEvent,
  deleteEvent,
  getForOffice
} = require("../services/events");

router.get("/all", async (req, res) => {
  res.send(200, await getAllEvents());
});

router.get("/allToday", async (req, res) => {
  res.send(200, await getAllTodayEvents());
});

router.get("/office/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await getForOffice(id));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await getEvent(id));
});

router.post("/add", async (req, res) => {
  const { body } = req;
  res.send(201, await setEvent(body));
});

router.put("/update/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  res.send(201, await updateEvent(id, body));
});

router.del("/delete/:id", async (req, res) => {
  const { id } = req.params;
  res.send(200, await deleteEvent(id));
});

module.exports = router;
