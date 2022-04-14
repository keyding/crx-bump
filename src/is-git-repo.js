// @ts-check
const sh = require('shelljs')

module.exports = function isGitRepo() {
  sh.config.silent = true
  return !!sh.which('git') && !!sh.find('.git').length
}
