module.exports = {
run: async (client, message, args, level) => {
  try {
if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Gerenciar Mensagens`");   
    
       if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para `gerenciar mensagens`.");
    await message.channel.send('Canal destrancado.');
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    });
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
},
  
  conf: {},

  help: {
    name: 'unlock',
    category: 'Utilidades',
    description: 'Destranca um chat.',
    usage: 'unlock'
  }
}
