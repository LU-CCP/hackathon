const sql = require("mssql");
const { config } = require("../config/database");

const getAllEvents = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM events");
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const getAllTodayEvents = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .query("SELECT * FROM events WHERE dates = CONVERT(date, GETDATE())");
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const getEvent = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`SELECT * FROM events WHERE id = @id`);
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const getForOffice = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(
        `SELECT * FROM events WHERE id_offices = @id AND dates = CONVERT(date, GETDATE())`
      );
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const setEvent = async body => {
  try {
    const { description, dates, hours, id_office } = body;

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("description", description)
      .input("dates", dates)
      .input("hours", hours)
      .input("id_office", id_office)
      .query(
        `INSERT INTO events 
         VALUES(@description,@dates,@hours,@id_office)`
      );
    sql.close();
    return { message: "Event saved successfully" };
  } catch (e) {
    console.log(e);
  }
};

const updateEvent = async (id, body) => {
  try {
    const { description, dates, hours, id_office } = body;

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("description", description)
      .input("dates", dates)
      .input("hours", hours)
      .input("id_office", id_office)
      .input("id", id)
      .query(
        `UPDATE events SET
         description = @description,
         dates = @dates,
         hours = @hours,
         id_offices = @id_office
         WHERE id = @id`
      );
    sql.close();
    return { message: "Event updated successfully" };
  } catch (e) {
    console.log(e);
  }
};

const deleteEvent = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE FROM events WHERE id = @id`);
    sql.close();
    return { message: "Event deleted successfully" };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllEvents,
  getAllTodayEvents,
  getEvent,
  setEvent,
  updateEvent,
  deleteEvent,
  getForOffice
};
