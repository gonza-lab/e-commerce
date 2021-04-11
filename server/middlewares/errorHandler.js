const handleError = ({ msg, status }, req, res) => {
  res.status(status).json({ ok: false, error: { msg, status } });
};

module.exports = handleError;
