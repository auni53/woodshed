const Database = require('../../src/db/db.js');

describe('Database class', function() {
  it('constructs with a sequalize object', function(){
    db = new Database();
    db.should.not.be.undefined;
    db.model.should.be.a('object');
  });

  it('successfully can be closed', function(){
    db = new Database();
    db.should.not.be.undefined;
    db.model.should.not.be.undefined;
    db.close()
  });
})

describe('create_tables', function() {});
describe('insert_tables', function() {});
