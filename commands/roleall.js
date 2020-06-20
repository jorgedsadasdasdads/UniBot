const Discord = require("discord.js")

module.exports = {
run: async (bot, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_ROLES"))
            return message.reply("Não tenho permissão para `Gerenciar Cargos`");    
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você precisa da permissão de `administrador` ')
let BReason = args.slice(0)
        
                .join(" ");
        if (!BReason) return message.reply("Mencione um cargo, exemplo: `s.roleall @novatos`")
        let C = message.channel;
        let role = message.mentions.roles.first() || message.guild.roles.get(args[0])
        if (!role) return message.reply("Mencione um cargo válido.")
        let gRole = message.guild.roles.find(`id`, `${role.id}`);
        if (!gRole) return message.reply("Não encontrei esse cargo ");


        message.guild.members.forEach((f, i) => {

                f.addRole(gRole.id);


        })
        C.send("O cargo está sendo adicionado em todos...")
},
  
  conf: {},

  get help () {
    return {
      name: 'roleall',
      description: 'Adiciona um cargo em todos os membros do servidor!',
      usage: 'roleall',
      category: 'Utilidades'
    }
  }
}
