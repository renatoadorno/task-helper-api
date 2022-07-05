import type { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import ErrorStatus from '../../libs/res/error.res';

export default class LoginValidation {
  private static userValidationSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  public static validateFields(req: Request, _res: Response, next: NextFunction): void {
    const { error } = LoginValidation.userValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }
}
