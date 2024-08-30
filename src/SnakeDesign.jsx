import React, { useEffect, useRef, useState } from 'react';

function SnakeDesign() {
	const canvasRef = useRef(null);
	const [posX, setPosX] = useState(10);
	const [posY, setPosY] = useState(10);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'red';
		ctx.fillRect(posX, posY, 20, 20);
	}, []);

	const drawRectangle = (color) => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = color;
		ctx.fillRect(posX, posY, 20, 20);
	};

	const moveRight = () => {
		setPosX((prevX) => prevX + 20);
		drawRectangle('red');
	};

	const moveLeft = () => {
		setPosX((prevX) => prevX - 20);
		drawRectangle('green');
	};

	const moveUp = () => {
		setPosY((prevY) => prevY - 20);
		drawRectangle('blue');
	};

	const moveDown = () => {
		setPosY((prevY) => prevY + 20);
		drawRectangle('yellow');
	};

	return (
		<div>
			<canvas ref={canvasRef} width={800} height={500} className="snakeDiv" />
			<div>
				<button onClick={moveRight}>Move Right</button>
				<button onClick={moveLeft}>Move Left</button>
				<button onClick={moveUp}>Move Up</button>
				<button onClick={moveDown}>Move Down</button>
			</div>
		</div>
	);
}

export default SnakeDesign;
