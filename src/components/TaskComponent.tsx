import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Task } from '../models/TaskModel';
import { TaskInputForm } from './TaskInputForm';
import config from '../setup/config.json';
import '../styles/TaskComponent.css';

export const TaskComponent = () => {
  // const [tasks, setTasks] = useState<Task[]>([
  //   { id: 1, title: 'Task 1', description: 'Description 1', completed: false, dueDate: null },
  //   { id: 2, title: 'Task 2', description: 'Description 2', completed: false, dueDate: new Date() },
  //   { id: 3, title: 'Task 3', description: 'Description 3', completed: true, dueDate: new Date() },
  // ]);

  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const url = config.API_URL;
      const token = localStorage.getItem('token');
      const tasks = (
        await axios.get(`${url}/task`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="task-component">
      {/* Add Task Button */}
      <div className="task-add-button-container">
        <button onClick={() => setIsModalOpen(true)} className="task-add-button">
          + Add Task
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setIsModalOpen(false)} className="modal-close-button">
                ✕
              </button>
            </div>
            <TaskInputForm
              onAddTask={newTask => {
                setTasks(prev => [...prev, newTask]);
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Task List */}
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-item-header">
              <h3 className="task-title">{task.title}</h3>
              <span
                className={`status-badge ${
                  task.completed ? 'status-badge--completed' : 'status-badge--pending'
                }`}
              >
                {task.completed ? '☑️ Done' : '⏳ Pending'}
              </span>
            </div>
            <p className="task-description">{task.description}</p>
            <div className="task-date">
              <span>📅</span>
              <span>{task.dueDate ? task.dueDate.toLocaleDateString() : 'No due date'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
