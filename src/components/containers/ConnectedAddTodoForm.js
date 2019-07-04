import React from "react";
import {useDispatch} from "react-redux";
import AddTodoForm from "../AddTodoForm";
import {addTodo} from "../../redux/creators/todoActionCreators";

const ConnectedAddTodoForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = task => e => {
        e.preventDefault();

        if(!task) {
            return;
        }

        dispatch(addTodo(task));
    };

    return (
        <AddTodoForm onSubmit={handleSubmit}/>
    );
};

export default ConnectedAddTodoForm;
