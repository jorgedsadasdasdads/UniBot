const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
      
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Gerenciar Mensagens`");    

     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você não tem permissão para utilizar esse comando, bobinho(a)`)
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Você não colocou um usuário para ser mutado.");
      
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão de `gerenciar mensagens`");
  let muterole = message.guild.roles.find(`name`, "SandyMute");

  // if muterole role doesn't exist, create it!
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "SandyMute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        // for each channel set these permissions
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
      }catch(e){
        console.log(e.stack);
      }
    }

    await(tomute.addRole(muterole.id));

    message.reply(`<@${tomute.id}> mutado com sucesso `);

      
  },

  conf: {},

  help: {
    name: 'mute',
    category: 'Moderação',
    description: 'Muta um infrator das regras do servidor!',
    usage: 'mute'
  }
}

