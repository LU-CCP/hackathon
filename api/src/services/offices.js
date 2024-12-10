const sql = require("mssql");
const { config } = require("../config/database");

const getAllOffices = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM offices");
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllOffices
};
