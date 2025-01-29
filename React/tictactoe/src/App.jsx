import { useState } from "react";

const TURNS = {
	X: "×",
	O: "o",
};

const Square = ({ children, updateBoard, index }) => {

	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div className="square" onClick={handleClick}>
			{children}
		</div>

	)
};

export default function App() {
	const [board, setBoard] = useState(
		Array(9).fill(" ")
	)
	const [turn, setTurn] = useState(TURNS.X)

	const updateBoard = (index) => {
		const newBoard = [... board]
		newBoard[index] = turn;
		setBoard(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		setTurn(newTurn)
	}

	return (
		<main className="board">
			<h1>TicTacToe</h1>
			<section className="game">
				{board.map((_, index) => {
					return (
						<Square
							key={index}
							index={index}
							updateBoard={updateBoard}
							>
							{board[index]}
						</Square>
					);
				})}
			</section>
			<h3>Current turn: {turn}</h3>
		</main>
	);
}
