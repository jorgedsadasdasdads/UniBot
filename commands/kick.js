const Discord = require("discord.js");
    
module.exports = {

    run: function (client, message, args) {

            if (!message.guild.me.hasPermission("KICK_MEMBERS"))
            return message.reply("⚠️ Você não tem este poder!");    
        
            if (message.mentions.members.size === 0)
              return message.reply("⚠️ Você deve mencionar o usuário a levar Kick");    
          
            const kickMember = message.mentions.members.first();
          
            kickMember.kick(reason.join(" ")).then(member => {
              message.reply(`✔️ ${member.user.username} Levou um belo de um Kick 👍.`);
            });
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