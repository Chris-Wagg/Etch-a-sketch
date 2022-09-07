function hello() {
	console.log('hello world')
}
hello()

const container = document.querySelector('#parent')

function addBoxes(number) {
	let i = 0
	for (i = 0; i < number; i++) {
		const box = document.createElement('div')
		box.textContent = `${i}`
		container.appendChild(box)
	}
}

addBoxes(81)
