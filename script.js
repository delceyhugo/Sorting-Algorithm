const canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 800

let board = new Board(canvas, 50)
let bubbleSort = new BubbleSort(board)

document.querySelector('#play').addEventListener('click', () => {bubbleSort.execute()})


document.querySelector('#speed').oninput = function() {
    bubbleSort.speed = this.value
    document.querySelector('#ms').innerHTML = this.value
}


document.querySelector('#num').oninput = function() {
    board = new Board(canvas, parseInt(this.value))
    bubbleSort = new BubbleSort(board)
    bubbleSort.speed = document.querySelector('#speed').value
    document.querySelector('#entities').innerHTML = this.value
}