import OracleDB from "oracledb";
import appConfig from "./env.js";

let connection;
const dbConfig = {
  user: appConfig.DB_USER,
  password: appConfig.DB_PASSWORD,
  connectString: appConfig.DB_CONNECT_STRING, // e.g., "localhost/XE"
};

async function initialize() {
  try {
    await OracleDB.createPool({
      user: appConfig.DB_USER,
      password: appConfig.DB_PASSWORD,
      connectString: appConfig.DB_CONNECT_STRING,
    });

    console.log("Connected to oracle Database");
  } catch (err) {
    throw err;
  }
}

async function getConnection() {
  try {
    // get connection from the pool and use it
    connection = await OracleDB.getConnection();
    return connection;
  } catch (err) {
    throw err;
  }
}

export { initialize, getConnection };
