import type { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import ErrorStatus from '../../libs/res/error.res';

export default class TasksValidation {
  private static createTaskValidationSchema = joi.object({
    task: joi.string().required(),
    userId: joi.string().required(),
  });

  public static createValidation(req: Request, _res: Response, next: NextFunction): void {
    const { error } = TasksValidation.createTaskValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }

  private static getTasksValidationSchema = joi.object({
    userId: joi.string().required(),
  });

  public static getValidation(req: Request, _res: Response, next: NextFunction): void {
    const { error } = TasksValidation.getTasksValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }

  private static updateTaskValidationSchema = joi.object({
    id: joi.string().required(),
    task: joi.string().required(),
    status: joi.string().required(),
  });

  public static updateValidation(req: Request, _res: Response, next: NextFunction): void {
    const { error } = TasksValidation.updateTaskValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }

  private static deleteTaskValidationSchema = joi.object({
    id: joi.string().required(),
  });

  public static deleteValidation(req: Request, _res: Response, next: NextFunction): void {
    const { error } = TasksValidation.deleteTaskValidationSchema.validate(req.body);

    if (error) next(ErrorStatus.badRequest({ message: error.details[0].message }));

    return next();
  }
}
