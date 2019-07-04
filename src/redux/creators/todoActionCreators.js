import {ADD_TODO, TOGGLE_TODO} from "../actions/todoActions";

export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: {
        task
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});
