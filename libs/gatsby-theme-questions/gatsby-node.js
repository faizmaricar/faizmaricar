const fs = require('fs');

exports.onPreBootstrap = function (props) {
  const contentPath = 'data';
  if (!fs.existsSync(contentPath)) {
    props.reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
