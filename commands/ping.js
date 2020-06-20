const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setAuthor(`Ping: ${Math.round(client.ping)}ms`)
    
      .setColor("#8b00fa")

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'ping',
      description: 'Mostra a latência do bot.',
      usage: 'ping',
      category: 'Info'
    }
  }
}
