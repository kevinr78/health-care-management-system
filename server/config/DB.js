import mongoose from "mongoose";
import appConfig from "./env.js";
import createAndReturnError from "./error.js";
let connection;

async function initialize() {
  // Create a new connection to the database
  mongoose
    .connect(appConfig.DB_CONNECT_STRING)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
    });
}

async function getConnection() {
  try {
    return connection;
  } catch (err) {
    throw err;
  }
}

export { initialize, getConnection };
