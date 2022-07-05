// type StatusType = 'newTasks' | 'inProgress' | 'completed';

export type Task = {
  id: string
  createdAt: Date
  updatedAt: Date
  task: string
  status: string
  userId: string
};

export type ParamTask = {
  task: string
  userId: string
};
