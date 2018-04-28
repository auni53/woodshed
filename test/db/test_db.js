const Database = require('../../src/db/db.js');

describe('Database class', function() {
  beforeEach(() => {
    db = new Database();
  });

  it('constructs with a pg client', function(){
    db.should.have.property('client');
  });

  it('can connect to database', async () => {
    db.active.should.be.false;
    await db.connect();
    db.active.should.be.true;
    await db.end();
    db.active.should.be.false;
  });

  afterEach(() => {
    if (db.active) db.end();
  });
})
