class rps {
    constructor(playA, playB) {
        this._playA = playA // on indique le choix du joueur A
        this._playB = playB || null; // on indique le choix du joueur B
        this._result = this.winner; // on calcule le winner directement depuis la methode get
    }

    get winner () {
    }


}