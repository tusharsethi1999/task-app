import { useState } from 'react';
import type { Task } from '../models/TaskModel';
import '../styles/TaskInputForm.css';

interface TaskInputFormProps {
  onAddTask: (task: Task) => void;
}

export const TaskInputForm: React.FC<TaskInputFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title || !description) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : null,
    };

    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      ></textarea>
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};
