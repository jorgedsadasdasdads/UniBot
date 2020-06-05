const Discord = require("discord.js");
 
module.exports = {

    run: function (client, message, args) {
 
    var membro = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!membro) return message.reply(`Mencione um usuário. Ex: !ban @membro [motivo]`)
    if (membro === message.member) return message.reply(`Você não pode banir a si próprio.`)
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`Digite um motivo. Ex: !ban @membro [motivo]`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Você precisa da permissão de **Banir Membros**.`)
 
    var canal = client.channels.get("718172916168130622");
 
    message.channel.send(`Você realmente deseja punir este usuário?`).then(msg => {
        msg.react("👍")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            canal.send(`**MEMBRO PUNIDO**\n\nMembro: \`${membro.user.username}\`\nMotivo: **${motivo}**`)
            membro.ban();
        })
    })
},

 conf: {},

  get help () {
    return {
      name: 'ban',
      category: 'Moderação',
      description: 'Bane um usuário do servidor.',
      usage: 'ban'
    }
  }
}