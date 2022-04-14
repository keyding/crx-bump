// @ts-check
const fs = require('fs')
const path = require('path')

const pkgPagh = path.resolve(__dirname, '..', `package.json`)
const pkg = JSON.parse(fs.readFileSync(pkgPagh, { encoding: 'utf-8' }))

module.exports = pkg
