'use strict'

const fs = require('fs')

function isJson (file) {
  return /json/.test(file)
}

module.exports = data => {
  return new Promise((resolve, reject) => {
    fs.readdir(data.path, (error, files) => {
      if (error) {
        reject(error)
      } else {
        const jsons = files.filter(isJson)
        resolve(Object.assign(data, {count: jsons.length}))
      }
    })
  })
}
