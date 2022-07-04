import { PrismaClient, Task } from '@prisma/client';

export default class TaskModel {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(task: string, userId: string): Promise<Task> {
    const newTask = await this.prismaClient.task.create({
      data: { task, userId },
    });
    return newTask;
  }

  public async findTasks(userId: string): Promise<Task[]> {
    const task = await this.prismaClient.task.findMany({ where: { userId } });
    return task;
  }
}
