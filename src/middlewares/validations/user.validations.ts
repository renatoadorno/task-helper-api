import type { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import UserModel from '../../models/UserModel';
import ErrorStatus from '../../libs/res/error.res';

export default class UserValidation {
  private static userModel = new UserModel();

  private static userValidationSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  public static validateFields(req: Request, _res: Response, next: NextFunction): void {
    const { error } = UserValidation.userValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }

  public static async validateEmail(req: Request, _res: Response, next: NextFunction):
  Promise<Response | void> {
    const { email } = req.body;

    const emailExists = await UserValidation.userModel.findByEmail(email);

    if (emailExists) next(ErrorStatus.unauthorized({ message: 'este email já existe' }));

    return next();
  }
}
