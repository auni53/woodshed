const Sequelize = require('sequelize');

DATABASE_ENDPOINT = '35.193.32.100'
DATABASE_NAME     = 'woodshed'
DATABASE_USERNAME = 'postgres'
DATABASE_PASSWORD = 'practice'

function connect() {
  console.log("the machines are learning");

  const db = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
      dialect: 'postgres',
      host: DATABASE_ENDPOINT,
      operatorAliases: false,
    });
  return db;
}

/*
const Exercise = sequelize.define('exercise', {
  id: {
  	type: Sequelize.INTEGER,
	primaryKey: true
  },
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  tempo: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }
 });
*/

/*
const Session = sequelize.define('session', {
  eID: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
  	references: {
  		model: Exercise,
  		key: 'id'
  		deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }},
  tempo: {
  	type: Sequelize.INTEGER
  }
 );
*/

// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });


module.exports = connect;
