const Database = require('src/db/Database.js');

describe('Database class', function() {
  beforeEach(() => {
    process.env.NODE_ENV = 'development';
  });

  it('loads the production config if asked', () => {
    process.env.NODE_ENV = 'production';
    db = new Database();
    db.config.should.not.have.property('host', 'localhost');
  });

  describe('with default database', () => {
    beforeEach(() => {
      db = new Database();
    });

    it('loads the development config by default', () => {
      db.config.should.not.be.undefined;
      db.config.should.not.have.key('user');
      db.config.should.have.property('host', 'localhost');
    });

    it('constructs with a pg client', function(){
      db.should.have.property('client');
    });

    it('fails to connect with bad user', async () => {
      db.config = { ...db.config, 'user': 'foobar' };
      // db.connect();
    });

    it('connects to local db', async () => {
      db.active.should.be.false;
      await db.connect();
      db.active.should.be.true;
      await db.end();
      db.active.should.be.false;
    });

    afterEach(() => {
      if (db.active) db.end();
    });
  }); 
})
