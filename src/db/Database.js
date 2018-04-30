const { Client } = require('pg');
const config = require('src/config');

module.exports = class Database {
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

  async q(uery) {
    return this.client.query(uery);
  }
}
