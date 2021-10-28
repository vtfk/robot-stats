'use strict'

const config = require('./config')
const { logger, logConfig } = require('@vtfk/logger')
const walkDirectories = require('./lib/walk-directories')
const postStats = require('./lib/post-stats')

logConfig({
  prefix: config.SYSTEM_NAME
})

logger('info', ['index', 'start'])

async function getStats () {
  const stats = await walkDirectories(config.DIRECTORIES_PATH)
  return stats
}

getStats()
  .then(postStats)
  .then(result => {
    logger('info', ['index', result._id, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', error])
    process.exit(1)
  })
