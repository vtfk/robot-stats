'use strict'

const axios = require('axios')
const generateSystemJwt = require('./generate-system-jwt')
const config = require('../config')
const logger = require('./logger')

module.exports = payload => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['post-stats', config.SYSTEM_NAME, 'start'])
    const url = `${config.STATS_SERVICE_URL}/${config.SYSTEM_NAME}`
    axios.defaults.headers.common['Authorization'] = generateSystemJwt()

    logger('info', ['post-stats', config.SYSTEM_NAME, 'url', url])

    try {
      const result = await axios.post(url, payload)
      logger('info', ['post-stats', config.SYSTEM_NAME, 'finished'])
      resolve(result.data)
    } catch (error) {
      logger('error', ['post-stats', config.SYSTEM_NAME, error])
      reject(error)
    }
  })
}
