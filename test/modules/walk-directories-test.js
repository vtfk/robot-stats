'use strict'

const test = require('ava')
const expectedData = require('../data/directories.json')
const walkDirectories = require('../../lib/walk-directories')
const directoryPath = 'test/directories'

test('Walk directories returns expected result', async t => {
  const data = await walkDirectories(directoryPath)
  t.deepEqual(data, expectedData, 'result ok')
})
