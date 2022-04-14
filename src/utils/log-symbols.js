// Fork https://github.com/sindresorhus/log-symbols
// @ts-check
const { red, blue, green, yellow } = require('kolorist')
const isUnicodeSupported = require('./is-unicode-supported.js')

const main = {
  info: blue('ℹ'),
  success: green('✔'),
  warning: yellow('⚠'),
  error: red('✖')
}

const fallback = {
  info: blue('i'),
  success: green('√'),
  warning: yellow('‼'),
  error: red('×')
}

module.exports = isUnicodeSupported() ? main : fallback
