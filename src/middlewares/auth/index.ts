import type { NextFunction, Request, Response } from 'express';
import ErrorRes from '../../libs/res/error.res';
import Token from '../../libs/security/jsonWebToken';

export default class Auth {
  public static handle(req: Request, _res: Response, next: NextFunction): void {
    const { authorization } = req.headers;

    const isAuthorized = Token.verify(authorization as string);

    if (!isAuthorized) {
      const err = ErrorRes.unauthorized({ message: 'Invalid token' });
      return next(err);
    }

    return next();
  }
}
