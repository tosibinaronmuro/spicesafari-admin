import CustomError from './custom-error.js';
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
