// this file is for cases where we need to access the
// webpack config as a file when using CLI commands.
// const fs = require('fs')

let service = process.VUE_CLI_SERVICE

if (!service || process.env.VUE_CLI_API_MODE) {
  const Service = require('./node_modules/@vue/cli-service/lib/Service.js')
  service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())
  service.init(process.env.VUE_CLI_MODE || process.env.NODE_ENV)
}

// fs.writeFile('aaa.json', JSON.stringify(service.resolveWebpackConfig()), () => {
//
// })
module.exports = service.resolveWebpackConfig()
