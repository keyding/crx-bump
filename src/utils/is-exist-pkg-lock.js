// @ts-check
const fs = require('fs')
const path = require('path')

const pkgLockPath = path.resolve(`${process.cwd()}`, 'package-lock.json')

module.exports = function isExistPkgLock() {
  return fs.existsSync(pkgLockPath)
}
