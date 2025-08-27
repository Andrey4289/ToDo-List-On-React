import "./TodoList.css"
import TodoListItem from "../TodoListItem/TodoListItem";
import { useState, useEffect } from "react";


function TodoList({ setCompletedTasksAmount, setTasksAmount, newTask }) {

    const [todos, setTodos] = useState([

        {
            title: "Buy a new car",
            isComplited: true,
            taskId: 1,
        }, {
            title: "Buy a new jet",
            taskId: 2,
            isComplited: false,
        }, {
            title: "Buy a new moto",
            taskId: 3,
            isComplited: false,
        }, {
            title: "Buy a new house",
            taskId: 4,
            isComplited: false,
        }
    ])

    useEffect(() => {
        setTasksAmount(todos.length)
    }, [todos])



    useEffect(() => {
        setCompletedTasksAmount(todos.filter(item => item.isComplited === true).length);
    }, [todos]);


    useEffect(() => {
        addNewTask(newTask)
    }, [newTask])

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


return (
    <div className="TodoList">
        {todos.map((item) =>
            <TodoListItem todoData={item} updateTaskComplited={updateTaskComplited} removeTask={removeTask} updateTaskTitle={updateTaskTitle} />
        )}
    </div>
);
}

export default TodoList;