const config = require('./config')
const server = require('./server')
const client = require('./client')

client.on('ready', () => {
  server.init(client).listen(config.port)
  client.user.setGame(`WoW | ${config.commandPrefix}help`); //Set the "Playing" text
})

client.login(process.env.DISCORD_API_KEY)

