'use strict'

const fs = require('fs')
const addDirectoryStatus = require('./add-directory-status')

function isDirectory (directory) {
  return directory.isDirectory
}

module.exports = directoryPath => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, async (error, files) => {
      if (error) {
        reject(error)
      } else {
        const result = files.map(folder => Object.assign({id: folder, path: `${directoryPath}/${folder}`}))
        const jobs = result.map(directory => addDirectoryStatus(directory))
        const possibleFolders = await Promise.all(jobs)
        resolve(possibleFolders.filter(isDirectory))
      }
    })
  })
}
