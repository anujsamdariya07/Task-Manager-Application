const notFound = (req, res) => {
  return res.status(404).send('Route does not exists!');
};

module.exports = notFound;
