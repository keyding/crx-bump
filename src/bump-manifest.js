// @ts-check
const fs = require('fs')
const path = require('path')
const sh = require('shelljs')
const { error } = require('./utils/log-symbols')

const cwd = process.cwd()

const userManifestPath = path.resolve(cwd, `package.json`)

let userManifest = {}

try {
  userManifest = JSON.parse(fs.readFileSync(userManifestPath, { encoding: 'utf-8' }))
}
catch(e) {
  sh.echo(`${error} Error on parsing package.json`)
  sh.exit(0)
}

module.exports = userManifest
