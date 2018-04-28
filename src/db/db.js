const { Client } = require('pg');

DATABASE_ENDPOINT = '35.193.32.100'
DATABASE_NAME     = 'woodshed'
DATABASE_USERNAME = 'postgres'
DATABASE_PASSWORD = 'practice'

class Database {
  constructor() {
    this.client = new Client();
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
