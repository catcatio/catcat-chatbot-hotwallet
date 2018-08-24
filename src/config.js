module.exports = {
  port: parseInt(process.env.PORT) || 3000,
  botLineId: process.env.BOT_LINEID,
  isProduction: process.env.NODE_ENV === 'production',
}