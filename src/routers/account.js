const { Keypair } = require('stellar-base')

const isPublickeyValid = (key) => {
  try {
    Keypair.fromPublicKey(key)
    return true
  } catch(err) {
    return false
  }
}

module.exports = (config) => {
  return async (request, response) => {
    const accountId = request.params.account_id
    console.log(`account: ${accountId}`)
    if (!accountId || !isPublickeyValid(accountId)) {
      return response.status(400).send('invalid account id')
    }

    response.redirect(`https://line.me/R/oaMessage/${config.botLineId}/?${accountId}`)
  }
}