import ResponseError from '../utils/ResponseError.mjs';

const notFound = (req, res, next) => {
    const error = new ResponseError(404, `Not Found - ${req.originalUrl}`);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode ? err.statusCode : res.statusCode === 200 ? 500 : res.statusCode;
    let message = statusCode === 500 ? 'Server error' : err.message;

    if (err.stack === 'CastError') {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export default { notFound, errorHandler };