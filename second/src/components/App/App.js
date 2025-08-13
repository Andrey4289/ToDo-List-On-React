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


// └── App (главный компонент)
//     ├── Header (заголовок)
//     └── TodoList (список)
//         ├── Search (поиск)
//         ├── AddTask (добавление)
//         └── TodoListItem (задача 1, задача 2...)