import type { Request, Response } from 'express';
import { ResponseError } from '../../@types/types/error.types';

const ErrorHandler = (err: ResponseError, _req: Request, res: Response) => {
  const { statusCode, body } = err;

  if (statusCode) {
    return res.status(statusCode).json(body);
  }

  return res.status(500).json({
    message: 'Internal Error',
  });
};

export default ErrorHandler;
