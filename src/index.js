require('dotenv/config')
require('@rabbotio/noconsole')

const config = require('./config')
const server = require('./server')

console.log('config.isProduction: ', config.isProduction)

server(config).start()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })