export interface TaskModel {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date | null;
}

export class Task implements TaskModel {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date | null;

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean = false,
    dueDate: Date | null = null,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
  }
}
