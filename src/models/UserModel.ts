import type { TaskModel } from './TaskModel';

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  tasks: Array<TaskModel>;
}

export class User implements UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  tasks: Array<TaskModel>;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    tasks: Array<TaskModel> = [],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = tasks ?? [];
  }
}
