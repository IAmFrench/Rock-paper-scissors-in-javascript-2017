class rps {
    constructor(playA, playB) {
        this._playA = playA // on indique le choix du joueur A
        this._playB = playB || null // on indique le choix du joueur B
        this._result = this.winner // on calcule le winner directement depuis la methode get
        switch (this_result) {
            case 'none': // pas de vainqueurs
                break;
            case 'playA':
                break;
            case 'playB':
                break;
        }
        console.log(this._result)
    }

    get winner () {
        if (this.playA == null) { // on générer aléatoirement un move pour le playerB
            this.setPlayB()
        }
        console.log(this._playA)
        console.log(this._playB)
        
        switch (this._playA) {
            case this._playB: // ils sont identiques
                this._winner = 'none'
                break
            case 'rock':
                if (this._playB == 'scissors') {
                    this._winner = 'playA'
                } else {
                    this._winner = 'playB'
                }
                break
            case 'paper':
                if (this._playB == 'rock') {
                    this._winner = 'playA'
                } else {
                    this._winner = 'playB'
                }
                break
            case 'scissors':
                if (this._playB == 'paper') {
                    this._winner = 'playA'
                } else {
                    this._winner = 'playB'
                }
                break
        }
        return this._winner
    }


    setPlayB() {
        var moves = [
            "rock",
            "paper",
            "scissors"
        ]
        var id = Math.floor(Math.random() * 3)
        this._playB = moves[id]
        return this.playB
    }
}


var playA;
/**
 * On lance la game si on clique sur l'un des boutons
 */
var game;
document.querySelector('#rock').addEventListener('click', function (e){
    playA = e.target.value
    game = new rps(playA)
})
document.querySelector('#paper').addEventListener('click', function (e){
    playA = e.target.value
    game = new rps(playA)
})
document.querySelector('#scissors').addEventListener('click', function (e){
    playA = e.target.value
    game = new rps(playA)
})

