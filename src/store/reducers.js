import { createReducer } from "@reduxjs/toolkit";
import { ADD_TASK, DELETE_TASK, SEARCHCTASK, UPDATETASKTITLE, UPDATETASKCOMPLITED } from "./actionTypes";

const initialState = {
  todos: [
    {
      title: "Buy a new car",
      isComplited: true,
      taskId: 1,
    }, 
    {
      title: "Buy a new jet",
      taskId: 2,
      isComplited: false,
    }, 
    {
      title: "Buy a new moto",
      taskId: 3,
      isComplited: false,
    }, 
    {
      title: "Buy a new house",
      taskId: 4,
      isComplited: false,
    }
  ]
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, 
        todos: [...state.todos, {
          title: action.payload,
          isComplited: false,
          taskId: Date.now(),
        }]
      }
    
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(item => item.taskId !== action.payload)
      };
    
   case SEARCHCTASK:
      return {
        ...state,
        todos: state.todos.filter((item) => {
          if (action.payload !== "") {
            return item.title.toLowerCase().includes(action.payload.toLowerCase());
          }
          return initialState;
        })
      };
    
    case UPDATETASKTITLE:
      return {
        ...state, 
        todos: state.todos.map((item) => {
          if (item.taskId === action.payload.taskId) { 
            return { ...item, title: action.payload.editText }
          }
          return item;
        })
      };
    
    case UPDATETASKCOMPLITED:
      return {
        ...state, 
        todos: state.todos.map((item) => {
          if (item.taskId === action.payload) { 
            return { ...item, isComplited: !item.isComplited }
          }
          return item;
        })
      };
    
    default:
      return state;
  };
}

export default reducer;