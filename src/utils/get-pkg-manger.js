// @ts-check
module.exports = function getPkgManager() {
  const userAgent = process.env.npm_config_user_agent
  
  if (!userAgent) return undefined

  const pmSpec = userAgent.split(' ')[0]
  const pmSpecArr = pmSpec.split('/')

  const name = pmSpecArr[0]
  const version = pmSpecArr[1]

  return {
    name: name === 'npminstall' ? 'cnpm' : name,
    version
  }
}
