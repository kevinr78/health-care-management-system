import { config } from "dotenv";
config();
const appConfig = {
  PORT: process.env.PORT || 3000,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CONNECT_STRING: process.env.DB_CONNECT_STRING,
};

export default appConfig;
