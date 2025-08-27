import "./App.css"
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";
import { useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";

function App() {

    const [tasksAmount, setTasksAmount] = useState(0)
    const [completedTasksAmount, setCompletedTasksAmount] = useState(0)

    const [newTask, setNewTask] = useState(null)

    return (
        <div className="App">
            <div className="Todo_container">
                <div className="HeadTodo">
                    <h1 className="Todo_h1">TODO List Demo App</h1>
                    <p className="Todo_p">Tasks: {tasksAmount}</p>
                    <p className="Todo_p">Tasks completed: {completedTasksAmount}</p>
                </div>
                <AddNewTask addTask={(newTaskData)=>{
                    setNewTask(newTaskData)
                }} />
                <TaskInfo />
                <TodoList setTasksAmount={setTasksAmount} setCompletedTasksAmount={setCompletedTasksAmount} newTask={newTask} />
            </div>
        </div>
    );
}

export default App;

