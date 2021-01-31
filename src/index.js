import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

function App() {
    return (
        <div className="container">
            <Board />
        </div>
    );
}

var container = document.getElementById("app");
ReactDOM.render(<App />, container);