function createAndReturnError(name, message, statusCode) {
  const err = new Error();
  err.name = name || "Error";
  err.statusCode = statusCode;
  err.status = false;
  err.message = ERROR_CODES[statusCode] || "Something went wrong";
  return err;
}

const ERROR_CODES = {
  400: "Malformed Request",
  401: "Unauthorized Access to resource",
  403: "You are not allowed to access this resource",
  404: "Requested resource not found",
  500: "Internal Server Error",
  501: "Not Implemented",
};
