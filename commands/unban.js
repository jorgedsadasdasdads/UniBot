const Discord = require(`discord.js`);

module.exports = {

    run: function (bot, message, args) {
      
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Não tenho permissão para `Banir Membros`");    

    let id = args.join(' ');
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissao para usar este comando`);
    let member = bot.fetchUser(id)
        .then(user => {
            message.guild.unban(user.id)
                .then(() => {
                    message.channel.send(`${user} foi desbanido com sucesso.`)
                }).catch(err => {
                    message.channel.send(`Falha ao desbanir ${user}`)
                })
        }).catch(() => message.channel.send("Desculpa não consegui desbanir o user com esse ID..."))
},
  
conf: {},

  get help () {
    return {
      name: 'unban',
      category: 'Moderação',
      description: 'Desbane um usuário do servidor.',
      usage: 'unban'
    }
  }
}