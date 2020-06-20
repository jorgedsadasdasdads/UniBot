const { Client, RichEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {

  /** Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
   * Que passará os argumentos atraves do middleware que programamos.
  */
  run: function (client, message, args) {
    let user   = message.mentions.users.first() || message.author,
        avatar = user.displayAvatarURL,
        embed  = new Discord.RichEmbed()
            .setDescription(`🖼 ${user}\n**Baixe Clicando [aqui](${avatar})**`)
            .setImage(avatar)
            .setColor("#8b00fa")
            .setFooter(`Sandy`)
            .setTimestamp()
    message.channel.send(embed);
},
    
   conf: {},

  help: {
    name: 'avatar',
    category: 'Diversão',
    description: 'Mostra o avatar de um usuário',
    usage: 'avatar'
  }
}
