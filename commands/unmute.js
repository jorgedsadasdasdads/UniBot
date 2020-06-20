const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
      
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Gerenciar Mensagens`");    
      
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você precisa ter a permissão de `Gerenciar Mensagens` ")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Por favor, mencione um usuário ou coloque o id do usuário que será desmutado!");

        let role = message.guild.roles.find(r => r.name === "SandyMute")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Esse usuário não está mutado!");

        await toMute.removeRole(role);
        message.channel.sendMessage("Usuário desmutado com sucesso!");

     
},

  conf: {},

  help: {
    name: 'unmute',
    category: 'Moderação',
    description: 'Desmuta um usuário do servidor!',
    usage: 'unmute'
  }
}