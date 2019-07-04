import React from "react";

export const TodoItem = ({ todo, onToggleTodo }) => {
    return (
        <tr>
            <td>{todo.task}</td>
            <td><input type="checkbox" checked={!!todo.done} onChange={onToggleTodo} value={todo.id}/></td>
        </tr>
    );
};

export const TodoList = ({todos, onToggleTodo}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Done?</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, i) => <TodoItem todo={todo} key={i} onToggleTodo={onToggleTodo}/>)}
            </tbody>
        </table>
    );
};
