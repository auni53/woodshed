const Database = require('src/db/Database');

module.exports = class User {
  static getUsers() {
    const db = new Database()
    return db.q('SELECT * FROM woodshed')
      .then(console.log)
      .catch(console.log);
  }

  static getUser({ id, name }) {
    return db.q(`SELECT * FROM woodshed
                 WHERE name=${name}
                    or id=${id}`);

  }

  static async addUser() {
    const db = new Database()
    return db.q('SELECT * FROM woodshed');
  }
}

