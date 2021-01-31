import React from "react";
import Modal from "./Modal"
import '../App';

import nought from "../static/img/nought.png";
import cross from "../static/img/cross.png";

const originalState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    gameOver: false,
    message: ''
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.restartGame = this.restartGame.bind(this);
        this.state = originalState;
    }

    restartGame() {
        this.setState(originalState);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        // We ignore the click if the box has already been clicked
        if (squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

        const winner = calculateWinner(squares);

        if (winner) {
            this.setState({
                gameOver: true,
                message: `${squares[i]} won the game`
            });
        } else if (!winner && !squares.some(s => s == null)) {
            this.setState({
                gameOver: true,
                message: "The game ended in a tie"
            });
        }
    }

    renderSquare(index) {
        const value = this.state.squares[index];
        let res = null;
        if (value) {
            res = value.toLowerCase() == "o" ? <img src={nought} title="Nought" alt="Nought" /> : <img src={cross} title="Cross" alt="Cross" />
        }
        return (
            <>
                {res}
            </>
        );
    }

    render() {
        return (
            <>
                { this.state.gameOver ? <Modal onDismiss={this.restartGame} dismissLabel="Restart" title="Game Over!" message={this.state.message} /> : ""}
                <div className="container col-lg-6 col-md-9 col-sm-12">
                    <h1 className="text-center">Noughts &amp; Crosses</h1>
                    <h3 className="text-center">{'Next player: ' + (this.state.xIsNext ? 'X' : 'O')}</h3>
                    <div className="board my-3">
                        <div className="row">
                            <div id="square_0" className="square col-4 px-0" onClick={() => this.handleClick(0)}>{this.renderSquare(0)}</div>
                            <div id="square_1" className="square col-4 px-0" onClick={() => this.handleClick(1)}>{this.renderSquare(1)}</div>
                            <div id="square_2" className="square col-4 px-0" onClick={() => this.handleClick(2)}>{this.renderSquare(2)}</div>
                        </div>
                        <div className="row">
                            <div id="square_3" className="square col-4 px-0" onClick={() => this.handleClick(3)}>{this.renderSquare(3)}</div>
                            <div id="square_4" className="square col-4 px-0" onClick={() => this.handleClick(4)}>{this.renderSquare(4)}</div>
                            <div id="square_5" className="square col-4 px-0" onClick={() => this.handleClick(5)}>{this.renderSquare(5)}</div>
                        </div>
                        <div className="row">
                            <div id="square_6" className="square col-4 px-0" onClick={() => this.handleClick(6)}>{this.renderSquare(6)}</div>
                            <div id="square_7" className="square col-4 px-0" onClick={() => this.handleClick(7)}>{this.renderSquare(7)}</div>
                            <div id="square_8" className="square col-4 px-0" onClick={() => this.handleClick(8)}>{this.renderSquare(8)}</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mx-2">
                    <button className="btn btn-outline-primary my-3 col-sm-12 col-md-6 col-lg-3" onClick={this.restartGame}>Restart</button>
                </div>
            </>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}