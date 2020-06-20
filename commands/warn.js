const Discord = require("discord.js");

module.exports = {

    run: function (client, message, args) {
      
      if (!message.guild.me.hasPermission("KICK_MEMBERS"))
            return message.reply("Não tenho permissão para `expulsar membros` (necessária para dar warn)");    
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não tem permissão para utilizar esse comando, bobinho(a)`)
 
    let membro = message.mentions.users.first()
    if (!membro) return message.reply(`Não esqueça de mencionar um usuário!`)
 
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`Por favor, coloque um motivo!`)
 
    let embed = new Discord.RichEmbed()
 
    .setTitle(`WARN - ${membro.username}`)
    .setColor('RED')
    .setFooter(`Staff responsavel: ${message.author.username}`, message.author.avatarURL)
    .setDescription(motivo)
 
    membro.send(embed)
    message.channel.send(`:thinking: Usuário avisado com sucesso!`)
 
},
  
   conf: {},

  get help () {
    return {
      name: 'warn',
      category: 'Moderação',
      description: 'Avisa um usuário do servidor.',
      usage: 'warn'
    }
  }
}
  
  
 
