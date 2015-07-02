var bunyan = require('bunyan');

function getLogger(logConfig) {
  var logStreams = [];

  if (logConfig.stdout.enabled)
    logStreams.push({level: logConfig.stdout.level, stream: process.stdout});
  if (logConfig.file.enabled)
    logStreams.push({level: logConfig.file.level, path: logConfig.file.path});

  var logger = bunyan.createLogger({
      name: 'syscoin',
      streams: logStreams
  });

  return logger;
}
module.exports = getLogger;