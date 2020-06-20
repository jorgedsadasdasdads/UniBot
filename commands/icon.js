const Discord = require('discord.js');

module.exports = {
run: function (client, message, args)  {

let embed = new Discord.RichEmbed()

.setColor('AQUA')
.setTitle(`${message.guild.name}`, message.guild.iconURL)
.setDescription(`[Baixe-a](${message.guild.iconURL})`)
.setImage(message.guild.iconURL)
.setColor('#36393e')

message.channel.send(embed)

},
         conf: {},

  help: {
    name: 'servericon',
    category: 'Diversão',
    description: 'Cria uma batalha de 1vs1 e o mais forte vence.',
    usage: 'servericon'
  }
}


