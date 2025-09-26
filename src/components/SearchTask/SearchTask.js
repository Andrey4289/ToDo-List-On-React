import { useState } from "react";
import { searchTask } from "../../store/actions";
import "./SearchTask.css"
import { useDispatch } from "react-redux";

function SearchTask() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch(); 

  const inputChange = (event) => {
    const value = event.target.value;
    setInputValue(event.target.value);
    searchTask(dispatch, event.target.value);
  }

  const search = () => {
    searchTask(dispatch, inputValue);
  }

  return (
    <div className="Search-task">
      <input 
        value={inputValue}
        onChange={inputChange}
        placeholder="Search" 
      />
      <button onClick={search}>
        Search
      </button>
    </div>
  );
}

export default SearchTask;