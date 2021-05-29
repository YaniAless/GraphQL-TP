const playerResolver = require('./players');
const teamResolver = require('./teams');

const baseResolver = {
  ...playerResolver,
  ...teamResolver
};

module.exports = baseResolver;