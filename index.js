'use strict'

const config = require('./config')
const logger = require('./lib/logger')
const getDirectories = require('./lib/get-directories')
const countFiles = require('./lib/count-files')
const postStats = require('./lib/post-stats')

logger('info', ['index', config.SYSTEM_NAME, 'start'])

function getStats () {
  return new Promise(async (resolve, reject) => {
    const directories = await getDirectories(config.DIRECTORIES_PATH)
    const jobs = directories.map(directory => countFiles(directory))
    const results = await Promise.all(jobs)
    const data = results.reduce((a, b) => {
      a[b.id] = b.count
      return a
    }, {})
    resolve(data)
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
