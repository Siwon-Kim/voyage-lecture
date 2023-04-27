module.exports = (req, res, next) => {
  console.log(`Call: ${req.method} ${req.originalUrl}`);
  next();
}