'use strict'

const config = require('./config')
const logger = require('./lib/logger')
const walkDirectories = require('./lib/walk-directories')
const postStats = require('./lib/post-stats')

logger('info', ['index', config.SYSTEM_NAME, 'start'])

function getStats () {
  return new Promise(async (resolve, reject) => {
    const stats = await walkDirectories(config.DIRECTORIES_PATH)
    resolve(stats)
  })
}

getStats()
  .then(postStats)
  .then(result => {
    logger('info', [config.SYSTEM_NAME, result._id, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', [config.SYSTEM_NAME, error])
    process.exit(1)
  })
