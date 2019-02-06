let log = (req, res, next) => {
    console.warn(req.method);
    next();
}

module.exports.log = log