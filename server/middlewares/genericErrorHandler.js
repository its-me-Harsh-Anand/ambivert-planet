const genericErrorHandler = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error"
    res.status(status).send(message)
}

module.exports = genericErrorHandler