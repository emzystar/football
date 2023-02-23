const notFound = (req, res) => {
  res.status(404).send(`Route not found

    try <a href = '/api/v1/teams'>Football Api</a>
    `);
};

module.exports = notFound
