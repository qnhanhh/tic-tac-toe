import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//function component is a simpler way to write components that only contain a render method and don't have their own state
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    //all react component classes that have a constructor should start with a super(props) call
    constructor(props) {
        super(props) //super is needed when defining the constructor of a subclass
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        //use slice to create a copy of the squares array instead of modifying the existing array
        const squares = this.state.squares.slice()
        squares[i]=this.state.xIsNext?'X':'O'
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext
        })
    }

    render() {
        const status = `Next player: ${this.state.xIsNext?'X':'O'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
