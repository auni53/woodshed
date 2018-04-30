const User = require('src/db/User.js');

describe('User class', () => {
  describe('#getUser', () => {
    it('fails to get user', () => {
      User.getUsers('foobar').should.be.empty;
    });

    it('gets existent user', async (done) => {
      const x = await User.getUsers('auni');
      x().should.have.length(1);
      done();
    });

  });

});
