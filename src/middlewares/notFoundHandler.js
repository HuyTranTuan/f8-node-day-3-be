const notFoundHandler = (req, res) => {
  res.error(404, `Resource not found, Cannot ${req.method} ${req.url}`);
};

module.exports = notFoundHandler;
