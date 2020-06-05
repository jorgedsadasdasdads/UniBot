const Discord = require("discord.js");

module.exports = {

    run: function (client, message, args) {

    // If the message is "ping"
    if (message.content === 'suporte') {
      // Send "pong" to the same channel
      message.channel.send('convite');
    }
  },

  conf: {},

          get help () {
            return {
              name: 'suporte',
              category: 'Suporte',
              description: 'Entre no meu servidor de suporte.',
              usage: 'suporte'
            }}}