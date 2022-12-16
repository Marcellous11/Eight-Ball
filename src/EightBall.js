import React, { useState } from 'react';
import './EigthBall.css';

const EightBall = (props) => {
	let { answer } = props;
	const [ truth, setTruth ] = useState('Ask your question');
	const [ color, setColor ] = useState('black');
	const [ redCountNum, redCount ] = useState(0);
	const [ greenCountNum, greenCount ] = useState(0);
	const [ goldCountNum, goldCount ] = useState(0);

	const play = () => {
		let randNum = Math.floor(Math.random() * 19) + 1;
		setTruth(answer[randNum].msg);
		setColor(answer[randNum].color);

		if (color === 'red') {
			redCount(redCountNum + 1);
		} else if (color === 'green') {
			greenCount(greenCountNum + 1);
		} else if (color === 'goldenrod') {
			goldCount(goldCountNum + 1);
		}
	};

	const reset = () => {
		setTruth('Ask your question');
		setColor('black');
		redCount(0);
		greenCount(0);
		goldCount(0);
	};
	return (
		<div className="EightBall">
			<div onClick={() => play()} style={{ backgroundColor: color }} className="EigthBall-circle">
				<div className="EightBall-InnerText">{truth}</div>
			</div>
			<h2>Counter Red : {redCountNum}</h2>
			<h2>Counter Green : {greenCountNum}</h2>
			<h2>Counter goldenrod: {goldCountNum}</h2>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
};

export default EightBall;
