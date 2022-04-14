// @ts-check
const argv = require('minimist')(process.argv.slice(2), { string: ['_'] })
const semverInc = require('semver/functions/inc')
const sh = require('shelljs')
const { yellow } = require('kolorist')

const { COMMANDER_KEYS, getCommander } = require('./get-commander')
const isGitRepo = require('./is-git-repo')
const isNotUndefined = require('./is-not-undefined')
const userManifest = require('./bump-manifest')

module.exports = function getCommanderByArgv(level) {
  if(!level) {
    sh.echo(yellow('\nOperation has been exited, no updated version\n'))
    sh.exit(0)
  }

  const all = isNotUndefined(argv.a) || isNotUndefined(argv.all)
  const tag = isNotUndefined(argv.t) || isNotUndefined(argv.tag)
  const commit = isNotUndefined(argv.c) || isNotUndefined(argv.commit)
  const push = isNotUndefined(argv.p) || isNotUndefined(argv.push)

  let commands = []

  const __getCommander = ctype => {
    return getCommander(ctype, level, semverInc(userManifest.version, level))
  }
  
  if(isGitRepo()) {
    if(all) {
      commands = [
        __getCommander(COMMANDER_KEYS.base),
        __getCommander(COMMANDER_KEYS.gpt)
      ]
    }
    else {
      if(commit) {
        commands = [
          __getCommander(COMMANDER_KEYS.ngt),
          __getCommander(COMMANDER_KEYS.ga),
          __getCommander(COMMANDER_KEYS.gc)
        ]
      }
  
      if(tag) {
        commands = [__getCommander(COMMANDER_KEYS.base)]
      }
  
      if(push) {
        // if just --push, to add and commit
        if(!commit && !tag) {
          commands = [
            __getCommander(COMMANDER_KEYS.ngt),
            __getCommander(COMMANDER_KEYS.ga),
            __getCommander(COMMANDER_KEYS.gc)
          ]
        }
       
        commands.push(__getCommander(tag ? COMMANDER_KEYS.gpt : COMMANDER_KEYS.gp))
      }

      // no argv
      if(!commands.length) {
        commands = [__getCommander(COMMANDER_KEYS.ngt)]
      }
    }
  }
  else {
    commands = [__getCommander(COMMANDER_KEYS.simple)]
  }

  return commands
}
