import CustomError from './custom-error.js';
import { StatusCodes } from 'http-status-codes';

class Unauthenticated extends CustomError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export default Unauthenticated;
