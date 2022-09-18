class Board{
    constructor(canvas, row){
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.row = row
        this.board
        this.#setup()
    }
    #setup(){
        this.board = []
        let elWidth = this.canvas.width / this.row
        let elHeight = this.canvas.height / this.row
        for (let i = 1; i < this.row + 1; i++) {
            this.board.push({width: elWidth, height: elHeight*i, color: '#CCCCCC'})
        }
        let currentIndex = this.board.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.board[currentIndex], this.board[randomIndex]] = [this.board[randomIndex], this.board[currentIndex]];
        }
        this.draw()
    }
    reload(){
        this.board = []
        this.#setup()
    }
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.board.length; i++) {
            this.ctx.beginPath()
            this.ctx.fillStyle = this.board[i].color
            this.ctx.strokeStyle = '#243342'
            this.ctx.lineWidth = 2;
            this.ctx.rect((this.canvas.width / this.row) * i, 0, this.board[i].width, this.board[i].height)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}