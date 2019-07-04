import React, {useState} from "react";

const AddTodoForm = ({onSubmit, ...props}) => {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        onSubmit(task)(e);

        setTask("");
    };

    return (
        <form {...props} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="todo">Whatcha gonna do</label>
                <input className="form-control" id="todo" aria-describedby="todo"
                       placeholder="Enter todo item" onChange={e => setTask(e.currentTarget.value)} value={task}/>
            </div>
            <button type="submit" className="btn btn-primary">Create todo</button>
        </form>
    );
};

export default AddTodoForm;
