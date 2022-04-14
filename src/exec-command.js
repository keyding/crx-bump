// @ts-check
const sh = require('shelljs')

module.exports = function execCommand(commanders = []) {
  if(commanders && commanders.length) {
    sh.config.silent = true

    ;(function exec (errorFlag = false) {
      const commander = commanders.shift()

      if(commander) {
        const { cmd, success, error } = commander

        if(errorFlag) {
          sh.echo(error)
        }
        else {
          sh.exec(cmd, (code, _, stderr) => {
            const execError = code !== 0
  
            if(execError) {
              sh.echo(stderr)
              error && sh.echo(error)
            }
            else {
              success && sh.echo(success)
            }
  
            exec(execError)
          })
        }
      }
    })()
  }
}
