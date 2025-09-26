import { ADD_TASK, DELETE_TASK, SEARCHCTASK, UPDATETASKTITLE, UPDATETASKCOMPLITED } from "./actionTypes"

export const addTask = (dispatch, title) => {
  dispatch({ type: ADD_TASK, payload: title })
}

export const deleteTask = (dispatch, taskId) => {
  dispatch({ type: DELETE_TASK, payload: taskId })
}

export const searchTask = (dispatch, text) => {
  dispatch({ type: SEARCHCTASK, payload: text })
}

export const updateTaskComplited = (dispatch, taskId) => {
  dispatch({ type: UPDATETASKCOMPLITED, payload: taskId })
}

export const updateTaskTitle = (dispatch, taskId, editText) => {
  dispatch({ type: UPDATETASKTITLE, payload: { taskId, editText } })
}