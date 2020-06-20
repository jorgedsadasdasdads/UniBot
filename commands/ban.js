const Discord = require("discord.js");
 
module.exports = {

    run: function (client, message, args) {
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
            return message.reply("Não tenho permissão para `Banir Membros`");    
 
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para `banir membros.`");
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('s.ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`${user} foi banido com sucesso.`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Eu não tenho permissão para `banir membros`!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Procurei por todos os lados mas não achei esse usuário!");
       }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Você não mencionou nenhum usuário válido para ser banido!");
       }
     } else {
      // Otherwise, if no user was mentioned
      message.reply("Não tenho permissões para `banir` este usuário");
    
  }
},
  
   conf: {},

  help: {
    name: 'ban',
    category: 'Moderação',
    description: 'Bane um usuário do servidor!',
    usage: 'ban'
  }
}
