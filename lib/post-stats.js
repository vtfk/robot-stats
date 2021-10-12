'use strict'

const axios = require('axios')
const { logger } = require('@vtfk/logger')
const generateSystemJwt = require('./generate-system-jwt')
const config = require('../config')

module.exports = async payload => {
  logger('info', ['post-stats', 'start'])
  const url = `${config.STATS_SERVICE_URL}/${config.SYSTEM_NAME}`
  axios.defaults.headers.common.Authorization = generateSystemJwt()

  logger('info', ['post-stats', 'url', url])

  try {
    const { data } = await axios.post(url, payload)
    logger('info', ['post-stats', 'finished'])
    return data
  } catch (error) {
    logger('error', ['post-stats', error])
    throw error
  }
}
