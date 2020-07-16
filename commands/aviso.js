const Discord = require("discord.js")

module.exports = {
  run: async (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Para utilizar esse comando, você precisar ter a permissão `administrador`')
message.delete()
 
let mensagem = args.join(" ")

 
message.guild.members.forEach((f) => {f.send(`${mensagem}`)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para todos os usuários deste servidor**`)
)},

  conf: {},

  help: {
    name: "aviso",
    category: "Ajuda",
    description: "Divulga seu Server",
    usage: "aviso"
  }
};
