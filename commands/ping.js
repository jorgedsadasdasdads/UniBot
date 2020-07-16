const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setAuthor(`Me adicione em seu servidor`)
      .setDescription(`**Clique** [**AQUI**](https://discord.com/oauth2/authorize?client_id=692465131849777316&permissions=0&scope=bot)`)
    message.channel.send(embed)
  },


  conf: {},

  get help () {
    return {
      name: 'invite',
      description: 'Mostra o convite da victória.',
      usage: 'invite',
      category: 'Info'
    }
  }
}
