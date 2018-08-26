import * as express from 'express'

export default ({ port }) => {
  const cors = require('cors')({ origin: true })
  const bodyParser = require('body-parser')
  const app = express()

  app.use(cors)
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.listen(port, (err) => {
    if (err) {
      return console.log(`Failed to start server on port ${port}`, err)
    }
    console.log(`Listening on port ${port}`)
  })

  return app
}

