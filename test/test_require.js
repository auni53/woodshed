
describe('resolver', () => {
  it('resolves relative path', () => {
    require.resolve('../src/db/Database.js');
    require.resolve('../src/db/Database');
  });

  it('resolves in src folder', () => {
    require.resolve('src/db/Database');
  });
});
