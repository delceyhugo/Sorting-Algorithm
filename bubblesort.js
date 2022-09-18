class BubbleSort{
    constructor(board){
        this.board = board
        this.array = board.board
        this.ctx = board.ctx
        this.speed = 100
        this.play = false
        this.done = false
    }
    execute(){
        this.play = true
        clearInterval(this.loop)
        let i = 0
        let j = 0
        this.loop = setInterval(() => {
            this.board.draw()
            if(i < this.array.length){
                this.done = true
                if(j < this.array.length - 1){
                    if (this.array[j].height > this.array[j+1].height) {
                        let temp = this.array[j].height
                        this.array[j].height = this.array[j+1].height
                        this.array[j+1].height = temp;
                        this.done = false
                    }
                    this.array[j].color = '#CCCCCC'
                    this.array[j+1].color = '#9E1A1A'
                }else{
                    this.array[j].color = '#CCCCCC'
                    j = -1
                    i++
                }
                j++
            }
        }, this.speed)

        // for (let i = 0; i < this.array.length; i++) {
        //     this.done = true
        //     for (let j = 0; j <  this.array.length - 1; j++) {


        //         if (this.array[j].height > this.array[j+1].height) {
        //             let temp = this.array[j].height
        //             this.array[j].height = this.array[j+1].height
        //             this.array[j+1].height = temp;
        //             this.done = false
        //         }
        //         this.array[j].color = '#CCCCCC'
        //         this.array[j+1].color = '#9E1A1A'

        //     }
        //     if (this.done){
        //         clearInterval(this.loop)
        //         break
        //     }
        // }
        // this.board.draw()
        // console.log('done')
    }
}