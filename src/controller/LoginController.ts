import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private loginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      const newLogin = await this.loginService.login({ email, password });

      return res.status(newLogin.statusCode).json(newLogin.body);
    } catch (err) {
      next(err);
    }
  }
}
