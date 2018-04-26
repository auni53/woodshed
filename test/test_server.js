const server = require('../src/index.js');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('routes', function() {
  afterEach(function() {
    server.close();
  });

  it('url /', function(done) {
    server.should.not.be.empty;

    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.text.should.equal('Hello World!');
        done();
      });
  });
});
