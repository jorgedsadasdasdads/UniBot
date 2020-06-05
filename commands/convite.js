const Discord = require("discord.js");

module.exports = {

    run: function (client, message, args) {

    // If the message is "ping"
    if (message.content === 'convite') {
      // Send "pong" to the same channel
      message.channel.send('Meu Convite é:');
    }
  },

  conf: {},

          get help () {
            return {
              name: 'convite',
              category: 'Suporte',
              description: 'Me convida para seu servidor :heart:',
              usage: 'convite'
            }}}