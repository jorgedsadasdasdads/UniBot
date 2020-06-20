module.exports = {
  run: function (client, message, args) {
    
    client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Oi') {
    // Send "pong" to the same channel
    message.channel.send(`Olá, tudo bem?`);
  }
})
  },

    
     conf: {},

  help: {
    name: 'convite',
    category: 'Ajuda',
    description: 'Me convide para seu servidor!',
    usage: 'convite'
  }
}
