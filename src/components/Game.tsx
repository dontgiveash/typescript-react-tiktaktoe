import { Container, Grid, Paper } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import calculateWinner from "../functions/calculate_winner";
import Field from "./Field";

interface IProps {
}
interface IState {
    history: Array<any>;
    xIsNext: boolean;
    stepNumber: number;
}

class Game extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        }
    }
    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)

        const moves = history.map((step: number, move: number) => {
            const desc = move ? 'Go to the step # ' + move : 'Go to the beggining'
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        let status
        if (winner === 'O' || winner === 'X') {
            status = 'Winner is ' + winner
        }
        else if (winner === '') {
            status = 'This is a draw'
        }
        else {
            status = 'Next is ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <Container sx={{ justifyContent:'center', alignItems:'center', alignContent:'center', minWidth:'300px'}}>
                <Grid container  margin='auto' justifyContent="center" alignContent="center" maxWidth='610px' alignItems="center">
                    <Grid margin='auto' justifyContent="center" alignContent="center" display="flexu" item xs={12} sm={6} md={6} lg={6}>
                        <Field
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </Grid>
                    <Grid item sx={{ height: '100px' }} xs={12} sm={6} md={6} lg={6}>
                        <div className="status">{status}</div>
                        <ol>{moves}</ol>
                    </Grid>

                </Grid>
            </Container>
        )
    }
}

export default Game;