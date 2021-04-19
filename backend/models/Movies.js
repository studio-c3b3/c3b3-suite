module.exports = class Movies {
    constructor ({
        title = 'Les dents de la mer',
        director = 'Steven Spielberg',
        image = 'lesDentsDeLaMer.jpg'
                 } =  {}) {
        this.title = title
        this.director = director
        this.image = image
    }

    // Mocked data
    static findAll () {
        return [
            new this(),
            new this({
                title: 'Hunger Games',
                director: 'Gary Ross',
                image: 'hungerGames.jpg',
            })
        ]
    }
}
