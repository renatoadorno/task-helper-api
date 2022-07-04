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

  public async findById(id: string): Promise<Task | null> {
    const task = await this.prismaClient.task.findUnique({ where: { id } });
    return task;
  }

  public async update(id: string, task: string, status: string): Promise<Task> {
    const newUpdate = await this.prismaClient.task.update({
      where: { id },
      data: { task, status },
    });
    return newUpdate;
  }
}
