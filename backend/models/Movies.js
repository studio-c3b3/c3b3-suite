module.exports = class Movies {
    constructor ({
        title = 'Les dents de la mer',
        director = 'Steven Spielberg'
                 } =  {}) {
        this.title = title
        this.director = director
    }

    // Mocked data
    static findAll () {
        return [
            new this(),
            new this({
                title: 'Hunger Games',
                director: 'Gary Ross'
            })
        ]
    }
}
