// @ts-check
const { cac } = require('cac')

const manifest = require('./manifest')

module.exports = function help() {
  const cli = cac('cbump')
  
  cli.option('-c, --commit', 'Commit changed files to Git.')
  cli.option('-t, --tag', 'Tag the commit in Git.')
  cli.option('-p, --push', 'Push the Git commit.')
  cli.option('-a, --all', 'Commit/tag/push ALL pending files.')

  cli.usage('[options]')

  cli.help()
  cli.version(manifest.version)

  cli.parse()
}
