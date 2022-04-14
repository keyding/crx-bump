// @ts-check
const { green } = require('kolorist')
const prompts = require('prompts')
const semverInc = require('semver/functions/inc')

const userManifest = require('./bump-manifest')

const LEVELS = ['patch', 'minor', 'major']

module.exports = async function selectLevel() {
  const version = await prompts([{
    type: 'select',
    name: 'level',
    message: 'Select a level, Current version: ' + green(userManifest.version),
    initial: 0,
    choices: LEVELS.map(level => {
      return {
        // @ts-ignore
        title: `${level}(${semverInc(userManifest.version, level)})`,
        value: level
      }
    })
  }])

  return version.level 
}
