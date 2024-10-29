import jwt from "jsonwebtoken";
import appConfig from "../config/env.js";

const JWT = {
  secret_key: appConfig.SECRET_KEY,
  create: function (payload) {
    console.log(payload);
    return jwt.sign(payload, this.secret_key);
  },
  verify: function () {
    const token = localStorage.getItem("token");
    return jwt.verify(token, this.secret_key);
  },
};

export default JWT;
