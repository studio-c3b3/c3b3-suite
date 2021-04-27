//titre, date de sortie, réalisateur, url vers le média

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Movie extends Model {}

Movie.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  director: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Movie' // We need to choose the model name
});

// the defined model is the class itself
console.log(Movie === sequelize.models.Movie); // true