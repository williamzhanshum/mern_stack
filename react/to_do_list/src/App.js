// import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  /*The below array destructure syntax is equivalent to: 
  const newTaskStateArr = useState('');
  const newTask = newTaskStateArr[0];
  const setNewTask = newTaskSatetArr[1]; 
  */
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();

    if (newTask.length === 0) {
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false,
    };

    // setTasks and pass in a brand new array containing all current tasks plus 1 more.
    setTasks([...tasks, taskItem]);
    setNewTask('');
  };

  const handleTaskDelete = (delIdx) => {
    const filteredTasks = tasks.filter((t, i) => {
      return i !== delIdx;
    });

    setTasks(filteredTasks);
  };

  const handleToggleComplete = (idx) => {
    const updatedTasks = tasks.map((t, i) => {
      if (idx === i) {
        t.complete = !t.complete;
        // To avoid mutating the task directly, do this:
        // const updatedTasks = { ...t, complete: !t.complete };
        // return updatedTasks;
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={(e) => handleNewTaskSubmit(e)}>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          type='text'
          value={newTask}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />

      {tasks.map((t, i) => {
        const taskClasses = ['bold', 'italic'];

        if (t.complete) {
          taskClasses.push('line-through');
        }

        return (
          <div key={i}>
            <input
              onChange={(e) => {
                handleToggleComplete(i);
              }}
              checked={newTask.complete}
              type='checkbox'
            />
            <span className={taskClasses.join(' ')}>{t.text}</span>
            <button
              onClick={(e) => {
                handleTaskDelete(i);
              }}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
