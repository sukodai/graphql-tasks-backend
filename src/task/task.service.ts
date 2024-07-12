import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';
//import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  //tasks: Task[] = [];
  constructor(private readonly prismaService: PrismaService) {}
  async getTasks(userId: number): Promise<Task[]> {
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = 'task1';
    // task1.dueDate = '2023-01-01';
    // task1.status = 'NOT_STARTED';
    // this.tasks.push(task1);
    //return this.tasks;
    return await this.prismaService.task.findMany({
      where: { userId },
    });
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskInput;
    // const newTask = new Task();
    // newTask.id = this.tasks.length + 1;
    // newTask.name = name;
    // newTask.dueDate = dueDate;
    // newTask.status = 'NOT_STARTED';
    // newTask.description = description;
    // this.tasks.push(newTask);
    // return newTask;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
        userId,
      },
    });
  }
  // createTask(name: string, dueDate: string, description?: string): Task {
  //   const newTask = new Task();
  //   newTask.id = this.tasks.length + 1;
  //   newTask.name = name;
  //   newTask.dueDate = dueDate;
  //   newTask.status = 'NOT_STARTED';
  //   newTask.description = description;

  //   this.tasks.push(newTask);
  //   return newTask;
  // }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskInput;

    return await this.prismaService.task.update({
      data: {
        name,
        dueDate,
        status,
        description,
      },
      where: { id },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return await this.prismaService.task.delete({
      where: {
        id,
      },
    });
  }
}
