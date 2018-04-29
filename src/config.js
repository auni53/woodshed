yaml = require('js-yaml');
fs   = require('fs');

module.exports = () => {
  const path = process.env.NODE_ENV || 'development'
  return yaml.safeLoad(fs.readFileSync(`config/${path}.yaml`));
}
