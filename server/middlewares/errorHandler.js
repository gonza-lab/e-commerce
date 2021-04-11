const handleError = ({ msg, code }, req, res, next) => {
  res.status(code || 500).json({ ok: false, error: { msg, code } });
};

module.exports = handleError;
