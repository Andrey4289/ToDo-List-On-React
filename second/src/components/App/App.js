import TodoListItem from "../TodoListItem/TodoListItem";
import "./App.css"



function App() {

    return (
        <div className="App">
            <div className="Todo_container">
                <h1 className="Todo_h1">TODO List Demo App</h1>
                <p className="Todo_p">Do it now.</p>
                <TodoListItem/>
                </div>
        </div>
    );
}

export default App;


