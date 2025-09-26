import "./TodoList.css"
import TodoListItem from "../TodoListItem/TodoListItem";
import { useState, useEffect } from "react";
import { todosArray, setNewTodos } from "../../data/todos";
import { useSelector } from "react-redux";

function TodoList({ updateTaskTitle, removeTask, updateTaskComplited }) {

    const todos = useSelector((state)=>{
        return state.todos;
    })

    return (
        
        <div className="TodoList">
            {todos.map((item) =>
                <TodoListItem
                    todoData={item}
                    updateTaskComplited={updateTaskComplited}
                    removeTask={removeTask}
                    updateTaskTitle={updateTaskTitle} />
            )}
        </div>
    );
}

export default TodoList;