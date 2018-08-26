import { Keypair } from 'stellar-base'

const isPublickeyValid = (key) => {
  try {
    Keypair.fromPublicKey(key)
    return true
  } catch(err) {
    return false
  }
}

export default (config) => {
  return async (request, response) => {
    const accountId = request.params.account_id
    const isValid = isPublickeyValid(accountId)
    console.log(`accounts: ${isValid ? '✅': '🔴'}  ${accountId}`)
    if (!isValid) {
      return response.status(400).send('invalid account id')
    }

    response.redirect(`https://line.me/R/oaMessage/${config.botLineId}/?${accountId}`)
  }
}