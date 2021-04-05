const codeInternalErrors = {
  USER_NOT_FOUND: 40,
  USER_NOT_FOUND_MESSAGE: "User no found",
  
  USER_EXISTS: 41,
  USER_EXISTS_MESSAGE: "User already defined",

  DATA_NOT_FOUND: 50,
  DATA_NOT_FOUND_MESSAGE: "Error query data",

  INSUFFICIENT_DATA: 51,
  INSUFFICIENT_DATA_MESSAGE: "The data provided is insufficient",

  BAD_REQUEST: 52,
  BAD_REQUEST_MESSAGE: "The data provided is poorly structured",

  PARAM_NO_FOUND: 80,
  PARAM_NO_FOUND_MESSAGE: "Param query no found",

  IMAGE_NO_FOUND: 90,
  IMAGE_NO_FOUND_MESSAGE: "Image not found",

  BODY_DATA_REQUIRED: 100,

  UNAUTHORIZED: 401,
  UNAUTHORIZED_MESSAGE: "Unauthorized access",

  FORBIDDEN: 403,
  FORBIDDEN_MESSAGE: "You do not have permissions to perform this operation",

  VALIDATION_FAILED: 422,
  VALIDATION_FAILED_MESSAGE: "Invalid request data"

};

export default codeInternalErrors;
