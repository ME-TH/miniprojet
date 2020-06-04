const notfound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorhandler = (error, _req, res, _next) => {
  const statuscode =
    res.statuscode === 200 || res.statuscode === undefined
      ? 404
      : res.statuscode;
  res.status(statuscode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === "production"
        ? "Sorry, Something Goes Wrong"
        : error.stack,
  });
};

module.exports = {
  notfound,
  errorhandler,
};
