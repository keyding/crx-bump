// @ts-check
const argv = require('minimist')(process.argv.slice(2), { string: ['_'] })

const isNotUndefined = require('./is-not-undefined')

module.exports = async function main() {
  const help = isNotUndefined(argv.h) || isNotUndefined(argv.help)
  const version = isNotUndefined(argv.v) || isNotUndefined(argv.version)

  help || version ? require('./help')() : require('./exec-command')(require('./get-commander-by-argv')(await require('./select-level')()))
}
