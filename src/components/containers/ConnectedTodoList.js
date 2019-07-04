import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TodoList} from "../TodoList";
import {toggleTodo} from "../../redux/creators/todoActionCreators";

const ConnectedTodoList = () => {
    const dispatch = useDispatch();
    const todos = Object.values(useSelector(state => state.todos));

    const handleToggleTodo = e => {
        dispatch(toggleTodo(e.currentTarget.value));
    };

    return (
        <TodoList todos={todos} onToggleTodo={handleToggleTodo}/>
    );
};

export default ConnectedTodoList;
