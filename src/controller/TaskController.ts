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

  public async findTasks(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const { userId } = req.body;

      const newTasks = await this.taskService.findTasksByUser(userId);

      return res.status(newTasks.statusCode).json(newTasks.body);
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    try {
      const { id, task, status } = req.body;

      const newUpdate = await this.taskService.update(id, task, status);

      return res.status(newUpdate.statusCode).json(newUpdate.body);
    } catch (err) {
      next(err);
    }
  }
}
