module.exports.notFoundErrorHandler = (req, res) => {
    res.status(404).send({ error: 'Resource not found.' });
};

module.exports.defaultErrorHandler = (error, req, res, next) => {
    res.status(error.status || 500).send({ error });
};
