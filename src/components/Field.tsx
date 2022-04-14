import React from "react";
import Square from "./Square";

interface IProps {
    squares: Array<string>;
    onClick(i: number): void;
}

interface IState {
    squares: Array<string>;
    xIsNext: boolean;
}


class Field extends React.Component<IProps, IState> {
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }
    render() {
        return (
            <div>
                <div className='field-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='field-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='field-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Field;