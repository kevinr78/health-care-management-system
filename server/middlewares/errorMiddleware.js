import winston from "winston";

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "error.log" })],
});

// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  logger.error(
    `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(err.statusCode || 500).json({
    status: err.status || false,
    message: err.message || "Something went wrong",
  });
};

export default errorMiddleware;
