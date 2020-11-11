const componentGenerator = require('./component-generator');
const pageGenerator = require('./page-generator');

module.exports = plop => {
  componentGenerator(plop);
  pageGenerator(plop);
};
