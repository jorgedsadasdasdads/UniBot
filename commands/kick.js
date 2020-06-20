const Discord = require("discord.js");
    
module.exports = {

    run: function (client, message, args, reason) {

if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Gerenciar Mensagens`"); 
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Você não tem permissão para `expulsar membros`");

  // If the message content starts with "!kick"
  if (message.content.startsWith('s.kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Expulso com sucesso ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Não tenho permissão para banir este usuário.');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Esse usuário não está aqui');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Você não mencionou um usuário válido para ser expulso.');
    }
  }
},
          

          conf: {},

          get help () {
            return {
              name: 'kick',
              category: 'Moderação',
              description: 'Expulsa um usuário do servidor.',
              usage: 'kick'
            }
          }
}
        
