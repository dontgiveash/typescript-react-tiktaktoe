import React from 'react';

interface SquareProps {
	value: string;
	onClick(): void;
}

class Square extends React.Component<SquareProps> {
	render() {
		return (
			<button className="square"
				onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		)
	}
}

export default Square;