import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private userService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password } = req.body;

      const newUser = await this.userService.create({ name, email, password });

      return res.status(newUser.statusCode).json(newUser.body);
    } catch (err) {
      next(err);
    }
  }
}
