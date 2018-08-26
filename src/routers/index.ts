import account from './accounts'
import { Router } from 'express'

export default (config) => {
  const accountApi = account(config)
  const router = Router()

  router.use('/account/:account_id', accountApi)
  router.use('/accounts/:account_id', accountApi)

  router.use('/', (req, res) => {
    res.status(200).send('OK')
  })
  return router
}