import { StatusCodes } from "http-status-codes";
import CustomError from '../errors/custom-error.js';

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Something went wrong, try again later';

    if (err instanceof CustomError) {
        return res.status(statusCode).json({ msg: message });
    }

    return res.status(statusCode).json({ msg: message });
};

export default errorHandler;
