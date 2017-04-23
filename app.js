class rps {
    constructor(playA, playB) {
        this._playA = playA // on indique le choix du joueur A
        this._playB = playB || null // on indique le choix du joueur B

        this._result = this.winner // on calcule le winner directement depuis la methode get
        this.addPictures() // on ajoute les images
        this.addResult() // on joute le résultat

        switch (this._result) {
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

    addPictures() {
        var imageA
        var imageB

        var images = {
            "rock":"https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png",
            "paper":"https://upload.wikimedia.org/wikipedia/commons/a/af/Rock-paper-scissors_%28paper%29.png",
            "scissors":"https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_%28scissors%29.png"
        }

        imageA = `<img src="${images[this._playA]}" alt="${this._playA}">`
        imageB = `<img src="${images[this._playB]}" alt="${this._playB}">`

        document.querySelector('.you').innerHTML = imageA
        document.querySelector('.ia').innerHTML = imageB

        return 'Images added'
    }

    addResult() {
        switch (this._result) {
            case 'none':
                var txt = 'Draw'
                break
            case 'playA':
                var txt = 'You win'
                break
            case 'PlayB':
                var txt = 'You lose'
                break
        }
        document.querySelector('#result').innerHTML = txt
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
