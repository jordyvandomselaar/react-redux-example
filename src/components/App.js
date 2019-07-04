import React from "react";
import ConnectedAddTodoForm from "./containers/ConnectedAddTodoForm";
import ConnectedTodoList from "./containers/ConnectedTodoList";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <ConnectedAddTodoForm/>
                <ConnectedTodoList/>
            </div>
        </div>
    );
};

export default App;
