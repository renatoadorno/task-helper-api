import type { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import ErrorStatus from '../../libs/res/error.res';

export default class TasksValidation {
  private static taskValidationSchema = joi.object({
    task: joi.string().required(),
    userId: joi.string().required(),
  });

  public static validateFields(req: Request, _res: Response, next: NextFunction): void {
    const { error } = TasksValidation.taskValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }
}
