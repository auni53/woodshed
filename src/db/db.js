const connect = function() {
  console.log("the machines are learning");
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('woodshed', 'postgres', 'practice',
	{dialect: 'postgres', host:'35.193.32.100', operatorAliases: false});

  sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
  });
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
