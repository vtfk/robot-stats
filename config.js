'use strict'

module.exports = {
  SYSTEM_NAME: process.env.SYSTEM_NAME || '',
  DIRECTORIES_PATH: process.env.DIRECTORIES_PATH || 'test/directories',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  STATS_SERVICE_URL: process.env.STATS_SERVICE_URL || 'https://stats.service.t-fk.no/stats',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-stats',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
