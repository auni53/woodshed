const Sequelize = require('sequelize');

DATABASE_ENDPOINT = '35.193.32.100'
DATABASE_NAME     = 'woodshed'
DATABASE_USERNAME = 'postgres'
DATABASE_PASSWORD = 'practice'

class Database {
  constructor() {
    const model = new Sequelize(
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      {
        dialect: 'postgres',
        host: DATABASE_ENDPOINT,
        operatorAliases: false,
      },
    );

    const User = model.define('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      username: Sequelize.STRING,
    });

    const Exercise = model.define('exercise', {
      name: Sequelize.STRING,
      tempo: Sequelize.INTEGER,
    });
    Exercise.belongsTo(User);

    this.model = model;
  }

  close() {
    this.model.close()
  }
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


module.exports = Database;
