
import "./TaskInfo.css"


function TaskInfo() {

    return (
        <div className="TodoListItem">
            <div className="container">
                {/* <p>#</p> */}
                <p>Task Name</p>
            </div>
            <div className="button-info">
                <p>Status</p>
                <p className="edit-button">Edit</p>
                <p>Remove</p>
            </div>
        </div>
    );
}

export default TaskInfo;
