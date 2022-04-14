// @ts-check
const { success, error } = require('./utils/log-symbols')
const { green } = require('kolorist')

module.exports = {
  // no git
  simple: {
    cmd: `<PKG_MANAGER> version <LEVEL>`,
    success: `${success} Updated package.json<PKG_LOCK> to ${green('<VERSION>')}`,
    error: `${error} Error on updating version`
  },
  // --silent, --force, --message
  base: {
    cmd: `<PKG_MANAGER> version <LEVEL> -s -f -m 'release v%s'`,
    success: `${success} Updated package.json<PKG_LOCK> to ${green('<VERSION>')}\n${success} Git commit\n${success} Git tag`,
    error: `${error} Error on updating version`
  },
  // git add package.json
  ga: {
    cmd: `git add package.json<PKG_LOCK>`,
    success: '',
    error: `${error} Error on git add`
  },
  // git commit ... package.json
  gc: {
    // @ts-ignore
    cmd: `git commit -q -o package.json<PKG_LOCK> -m 'release v<VERSION>'`,
    success: `${success} Git commit`,
    error: `${error} Error on git commit`
  },
  // git push
  gp: {
    cmd: `git push`,
    success: `${success} Git push`,
    error: `${error} Error on git push`
  },
  // git push --tag
  gpt: {
    cmd: `git push --tags`,
    success: `${success} Git push`,
    error: `${error} Error on git push`
  },
  // --no-git-tag-version
  ngt: {
    cmd: `<PKG_MANAGER> version <LEVEL> --no-git-tag-version`,
    success: `${success} Updated package.json<PKG_LOCK> to ${green('<VERSION>')}`,
    error: `${error} Error on updating version`
  }
}
