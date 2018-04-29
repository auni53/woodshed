const Config = require('src/config');

describe('config package', () => {
  it('loads dev config by default', () => {
    const config = Config();
    config.should.be.not.undefined;
    config.should.have.key('database');
    config['database'].should.not.have.property('user');
  });

  it('loads prod config if specified', () => {
    process.env.NODE_ENV = 'production';
    const config = Config();
    config['database'].should.have.property('user');
  });
});
