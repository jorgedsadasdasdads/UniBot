module.exports = {
run: async (client, message, args, level) => {
  try {

if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Gerenciar Mensagens`");    
           if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para `gerenciar mensagens`.");
    await message.channel.send('**Canal Trancado!**(Caso não funcione, lembre-se de me dar permissão de `administrador`, e colocar meu cargo acima de todos!');
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
},

conf: {},

  help: {
    name: 'lock',
    category: 'Moderação',
    description: 'Tranca um canal.',
    usage: 'lock'
  }
}