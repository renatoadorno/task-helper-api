import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

export default class UserController {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password } = req.body;

      const newUser = await this.prismaClient.user.create({
        data: { name, email, password },
      });

      return res.status(200).json(newUser);
    } catch (err) {
      next(err);
    }
  }
}
