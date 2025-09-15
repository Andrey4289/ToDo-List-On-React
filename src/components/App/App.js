import "./App.css"
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";
import SearchTask from "../SearchTask/SearchTask";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useState, useEffect } from "react";
import { todosArray, setNewTodos } from "../../data/todos";

function App() {

    const [taskToSearch, setTaskToSearch] = useState("")

    const [tasksAmount, setTasksAmount] = useState(0)
    const [completedTasksAmount, setCompletedTasksAmount] = useState(0)

    const [newTask, setNewTask] = useState(null)

    const [todos, setTodos] = useState(todosArray)


    const searchTasks = (text) => {
        if (text != "") {
            const NewTasks = todos.filter((item) => {
                return item.title.includes(text)

            })
            return NewTasks;
        } else {
            return todos;
        }
        // setTodos(NewTasks)
    }

    const updateTaskTitle = (taskId, editText) => {
        const newTodos = todos.map((item) => {
            if (taskId == item.taskId) {
                item.title = editText
            }
            return item
        })
        setTodos(newTodos)
    }

    const updateTaskComplited = (taskId) => {
        const newTodos = todos.map((item) => {
            if (taskId == item.taskId) {
                item.isComplited = !item.isComplited
            }
            return item
        })
        setTodos(newTodos)

    };



    const removeTask = (taskId) => {
        const delTodos = todos.filter((item) => {
            return taskId != item.taskId
        })
        setTodos(delTodos)
    }

    useEffect(() => {
        if (newTask && newTask.trim() !== "") {
            addNewTask(newTask)
        }
    }, [newTask])

    // useEffect(() => {
    //     searchTasks(taskToSearch)
    // }, [taskToSearch])


    const addNewTask = (newTask) => {

        const newTodos = todos.map((item) => {

            return item
        })
        newTodos.push({

            title: newTask,
            isComplited: false,
            taskId: Date.now(),

        })
        setTodos(newTodos)
    }
    useEffect(() => {
        setCompletedTasksAmount(todos.filter(item => item.isComplited === true).length);
    }, [todos]);

    useEffect(() => {
        setTasksAmount(todos.length)
        setNewTodos(todos)
        console.log(todosArray)
    }, [todos])
    return (
        <div className="App">
            <div className="Todo_container">
                <div className="HeadTodo">
                    <h1 className="Todo_h1">TODO List Demo App</h1>
                    <p className="Todo_p">Tasks: {tasksAmount}</p>
                    <p className="Todo_p">Tasks completed: {completedTasksAmount}</p>
                </div>

                <SearchTask searchTasks={(toSearch) => {
                    setTaskToSearch(toSearch)
                }} />
                <AddNewTask addTask={(newTaskData) => {
                    setNewTask(newTaskData)
                }} />
                <TaskInfo />
                <TodoList
                    list={searchTasks(taskToSearch)}
                    updateTaskTitle={updateTaskTitle}
                    updateTaskComplited={updateTaskComplited}
                    removeTask={removeTask}
                />
            </div>
        </div>
    );
}

export default App;

