
describe('resolver', () => {
  it('resolves relative path', () => {
    require.resolve('../src/db/db.js');
    require.resolve('../src/db/db');
  });

  it('resolves in src folder', () => {
    require.resolve('src/db/db');
  });

  // it('resolves searchingly', () => {
  //   require.resolve('db');
  // });
});
