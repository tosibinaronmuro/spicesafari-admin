import CustomError from './custom-error.js';
import { StatusCodes } from 'http-status-codes';

class NotFound extends CustomError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

export default NotFound;
