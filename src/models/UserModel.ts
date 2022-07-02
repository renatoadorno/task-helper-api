import { PrismaClient, User } from '@prisma/client';

export default class UserModel {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(name: string, email: string, password: string): Promise<User> {
    const newUser = await this.prismaClient.user.create({
      data: { name, email, password },
    });
    return newUser;
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.prismaClient.user.findUnique({ where: { id } });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaClient.user.findUnique({ where: { email } });
    return user;
  }
}
