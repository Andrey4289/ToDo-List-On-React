
import "./TaskInfo.css"


function TaskInfo() {

    return (
        <div className="TodoListItem">
            <div className="container">
                <p>#</p>
                <p>Task Name</p>
            </div>

            <p>Status</p>
            <p>Edit</p>
            <p>Remove</p>
        </div>
    );
}

export default TaskInfo;
