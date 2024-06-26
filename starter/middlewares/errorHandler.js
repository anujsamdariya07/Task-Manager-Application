const { CustomAPIError } = require('../errors/customErrors');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something wen wrong, please try again!` });
};

module.exports = errorHandlerMiddleware;
