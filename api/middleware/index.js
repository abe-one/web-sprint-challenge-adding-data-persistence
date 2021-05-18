// eslint-disable-next-line no-unused-vars
exports.handleErrors = (err, _req, res, _next) => {
  res.status(err.status || 500).json({
    devNotes: "Nonsense, the server is perfect, always UP, never down.",
    message: err.message,
    stack: err.stack,
  });
};
