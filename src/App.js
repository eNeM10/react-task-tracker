import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'Feb 6th at 10:00pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Feb 6th at 10:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'Feb 7th at 10:00pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'Task 4',
      day: 'Feb 8th at 10:00pm',
      reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }

    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Remainder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      <Header toggleShowAddTask={() => {
        setShowAddTask(!showAddTask)
      }} showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : "No tasks to show!"}
    </div>
  );
}

export default App;
