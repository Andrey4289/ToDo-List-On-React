import "./App.css"
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";

function App() {

    return (
        <div className="App">
            <div className="Todo_container">
                <div className="HeadTodo">
                <h1 className="Todo_h1">TODO List Demo App</h1>
                <p className="Todo_p">Do it now.</p>
                </div>
                <TaskInfo/>
                <TodoList/>
                </div>
        </div>
    );
}

export default App;


