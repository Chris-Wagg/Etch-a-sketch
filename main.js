function createBoard(size) {
	let board = document.querySelector('.board')
	let squares = board.querySelectorAll('div')
	squares.forEach((div) => div.remove())
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`

	let amount = size * size
	for (let i = 0; i < amount; i++) {
		let square = document.createElement('div')
		square.addEventListener('mouseover', changeColor)
		board.insertAdjacentElement('beforeend', square)
	}
}

function changeSize(input) {
	if (input >= 2 && input <= 100) {
		createBoard(input)
	} else {
		console.log('ERROR: Bad number of squares')
	}
}

createBoard(16)

function changeColor(e) {
	let color = `rgb(${[0, 0, 0]
		.map((channel) => {
			return Math.floor(Math.random() * 256)
		})
		.join(',')})`
	Object.assign(e.target.style, {
		backgroundColor: color,
	})
}

function resetBoard() {
	let board = document.querySelector('.board')
	let squares = board.querySelectorAll('div')
	squares.forEach((div) => (div.style.backgroundColor = 'white'))
}
