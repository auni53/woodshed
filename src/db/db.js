const { Client } = require('pg');
const config = require('src/config');

class Database {
  constructor(test) {
    this.config = config()['database'];
    this.client = new Client(this.config);
    this.active = false;
  }

  async connect() {
    await this.client.connect();
    this.active = true;
  }

  async end() {
    await this.client.end();
    this.active = false;
  }
}

module.exports = Database;
