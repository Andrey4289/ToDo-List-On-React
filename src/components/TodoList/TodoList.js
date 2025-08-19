import "./TodoList.css"
import TodoListItem from "../TodoListItem/TodoListItem";
import { useState } from "react";


function TodoList() {
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
            console.log(item)
            console.log(taskId != item.taskId)
            console.log("--------------------")
            return taskId != item.taskId
        })
        setTodos(delTodos)
    }

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
    return (
        <div className="TodoList">
            {todos.map((item) =>
                <TodoListItem todoData={item} updateTaskComplited={updateTaskComplited} removeTask={removeTask} />
            )}
        </div>
    );
}

export default TodoList;