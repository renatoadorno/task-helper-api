import { Request, Response, NextFunction } from 'express';
import TaskService from '../services/task.service';

export default class TaskController {
  private taskService;

  constructor() {
    this.taskService = new TaskService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { task, userId } = req.body;

      const newTask = await this.taskService.create({ task, userId });

      return res.status(newTask.statusCode).json(newTask.body);
    } catch (err) {
      next(err);
    }
  }
}
