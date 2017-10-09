const Bluebird = require('bluebird')
const Discord = require('discord.js')

const config = require('./config')

const client = new Discord.Client()

const normalise = message => message.slice(1)
  .toLowerCase()
  .replace('-', ' ')
  .replace(/\s+/, ' ')
  .split(' ')

client.on('message', handleMessage)

function handleMessage (message) {
  if (!message.content.startsWith(config.commandPrefix) || message.content.length < 2) { return }

  Bluebird.resolve(normalise(message.content))
    .spread((command, character, realm = 'saurfang', region = 'us') => {
      console.log(command, character, realm, region)
      message.channel.startTyping()
      return require(`./commands/${command}`)({ character, realm, region })
    })
    .spread((text, opts) => message.channel.sendMessage(text, opts))
    .catch(err => message.channel.sendMessage(err.message || err.toString()))
    .then(() => message.channel.stopTyping())
}

module.exports = client
