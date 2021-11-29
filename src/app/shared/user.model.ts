import { task } from './task.model';

export class User {
  public name: string;
  public email: string;
  public password: string;
  public tasks: task[];

  constructor(name: string, email: string, password: string, tasks: task[]) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = tasks;
  }
}
