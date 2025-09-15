import "./TodoList.css"
import TodoListItem from "../TodoListItem/TodoListItem";
import { useState, useEffect } from "react";
import { todosArray, setNewTodos } from "../../data/todos";

function TodoList({list, updateTaskTitle, removeTask, updateTaskComplited}) {

    return (
        <div className="TodoList">
            {list.map((item) =>
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