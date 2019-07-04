import {ADD_TODO, TOGGLE_TODO} from "../actions/todoActions";
import produce from "immer";

const initialState = {
    todos: {},
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return produce(state, draft => {
                const lastTodo = Object.values(draft.todos).slice(-1)[0];

                const id = !!lastTodo ? lastTodo.id + 1 : 1;

                draft.todos[id] = {
                    id,
                    task: action.payload.task,
                    done: false
                }
            });

        case TOGGLE_TODO:
            return produce(state, draft => {
                draft.todos[action.payload.id].done = !draft.todos[action.payload.id].done;
            });
        default:
            return state;
    };
};

export default todoReducer;
