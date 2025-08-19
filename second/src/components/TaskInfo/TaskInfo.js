
import "./TaskInfo.css"


function TaskInfo() {

    return (
        <div className="TodoListItem">
            <div className="container">
                <p>#</p>
                <p>Task Name</p>
            </div>

            <p className="TodoListItem_container_p_status">Status</p>
            <div className="TodoListItem_container">
                <p>Edit</p>
                <p>Remove</p>
            </div>
        </div>
    );
}

export default TaskInfo;