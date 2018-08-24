module.exports = (config) => {
  const account = require('./account')(config)
  const router = require('express').Router()

  router.use('account/:account_id', account)
  router.use('accounts/:account_id', account)

  router.use('/', (req, res) => {
    res.status(200).send('OK')
  })
  return router
}