'use strict'

const isDirectory = require('is-directory')

module.exports = data => {
  return new Promise((resolve, reject) => {
    isDirectory(data.path, (error, dir) => {
      if (error) {
        reject(error)
      } else {
        resolve(Object.assign(data, {isDirectory: dir}))
      }
    })
  })
}
