module.exports = (config) => {
  const account = require('./account')(config)
  const router = require('express').Router()
  router.use('/:account_id', account)
  return router
}