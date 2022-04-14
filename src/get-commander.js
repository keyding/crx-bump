// @ts-check
const { green } = require('kolorist')
const getPkgManager = require('./utils/get-pkg-manger')
const isExistPkgLock = require('./utils/is-exist-pkg-lock')
const COMMANDER_TEMPLATES = require('./commander-templates')

module.exports.COMMANDER_KEYS = Object.fromEntries(Object.keys(COMMANDER_TEMPLATES).map(key => [key, key]))

module.exports.getCommander = function getCommander(ctype, level, version) {
  const pkgManager = getPkgManager()
  const pkgName = pkgManager ? pkgManager.name : 'npm'

  const isNpm = pkgName === 'npm'
  const isYarn = pkgName === 'yarn'

  const commander = COMMANDER_TEMPLATES[ctype]

  const __replace = val => {
    return val
      .replace('<PKG_MANAGER>', pkgName)
      .replace('<PKG_LOCK>',isNpm && isExistPkgLock() ? ' package-lock.json' : '')
      .replace('<LEVEL>', `${(isYarn ? '--' : '') + level}`)
      .replace('<VERSION>', version)
  }

  if(commander) {
    for(let k in commander) {
      commander[k] = __replace(commander[k])
    }
  }

  return commander
}
