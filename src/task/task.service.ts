import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = 'task1';
    // task1.dueDate = '2023-01-01';
    // task1.status = 'NOT_STARTED';
    // this.tasks.push(task1);
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);
    return newTask;
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
}
