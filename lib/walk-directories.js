'use strict'

const fs = require('fs')
const addDirectoryStatus = require('./add-directory-status')
const countFiles = require('./count-files')

function isDirectory (directory) {
  return directory.isDirectory
}

function repackDirectories (folders) {
  return folders.reduce((a, b) => {
    a[b.id] = Object.keys(b.subdirs).length > 0 ? Object.assign({count: b.count}, b.subdirs) : {count: b.count}
    return a
  }, {})
}

function getDirectories (directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, async (error, files) => {
      if (error) {
        reject(error)
      } else {
        const result = files.map(folder => Object.assign({id: folder, path: `${directoryPath}/${folder}`}))
        const jobs = result.map(directory => addDirectoryStatus(directory))
        const possibleFolders = await Promise.all(jobs)
        const folders = await Promise.all(possibleFolders.filter(isDirectory).map(async folder => Object.assign(folder, {count: await countFiles(folder)}, {subdirs: await getDirectories(folder.path)})))
        resolve(repackDirectories(folders))
      }
    })
  })
}

module.exports = directoryPath => getDirectories(directoryPath)
