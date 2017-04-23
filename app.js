class rps {
    constructor(playA, playB) {
        this._playA = playA // on indique le choix du joueur A
        this._playB = playB || null // on indique le choix du joueur B
        this._result = this.winner // on calcule le winner directement depuis la methode get
    }

    get winner () {
        if (this.playA == null) { // on générer aléatoirement un move pour le playerB
            
        }
    }

    setPlayB() {
        moves = [
            "rock",
            "paper",
            "scissors"
        ]
        id = Math.floor(Math.random() * 3)
        this._playB = images[id]
        return this.playB
    }


}


/**
 * On écoute le clic sur l'un des bouttons
 */
var playA;
document.querySelector('#rock').addEventListener('click', function (){
    playA = 'rock'
})

document.querySelector('#paper').addEventListener('click', function (){
    playA = 'paper'
})
document.querySelector('#rock').addEventListener('click', function (){
    playA = 'scissors'
})


/**
 * On lance la game si on clique sur l'un des boutons
 */
var game;
document.querySelector('.but').addEventListener('click', function (){
    game = new rps(playA)
})
