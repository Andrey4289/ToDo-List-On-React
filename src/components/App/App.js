import "./App.css"
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";
import SearchTask from "../SearchTask/SearchTask";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useState, useEffect } from "react";
import { setNewTodos } from "../../data/todos";
import { useSelector } from "react-redux";

function App() {

    const store = useSelector((state) =>{
        return state.todos;
    })

    const todosArray = [];

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
        
    }
 

    useEffect(() => {
        setCompletedTasksAmount(todos.filter(item => item.isComplited === true).length);
    }, [todos]);


    return (
        <div className="App">
            <div className="Todo_container">
                <div className="HeadTodo">
                    <h1 className="Todo_h1">TODO List Demo App</h1>
                    <p className="Todo_p">Tasks: {store.length}</p>
                    <p className="Todo_p">Tasks completed: {store.filter(item => item.isComplited).length}</p>
                </div>

                <SearchTask searchTasks={(toSearch) => {
                    setTaskToSearch(toSearch)
                }} />
                <AddNewTask />
                <TaskInfo />
                <TodoList
                    list={searchTasks(taskToSearch)}
        
                />
            </div>
        </div>
    );
}

export default App;

