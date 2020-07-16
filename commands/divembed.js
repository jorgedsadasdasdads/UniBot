const Discord = require("discord.js")
const { Client, RichEmbed } = require('discord.js');

module.exports = {
  run: async (client, message) => {


    let timedOut = false
  
    const { channel, author } = message
  
    const isFromAuthor = m => m.author.id == author.id
  
    const options = {
      max: 1,
      time: 60 * 1000
    }
  
    await channel.send('Agora digite a mensagem que quer enviar no embed.')
    const firstColl = await channel.awaitMessages(isFromAuthor, options)
  
    if (firstColl.size > 0) {
      const title = firstColl.first().content

       const Embed = new RichEmbed()
        .setAuthor(`Aviso do servidor ${message.guild.name} `)
        .setDescription(title)
        .setFooter("© Larissa v$")
        .setTimestamp()

        message.guild.members.forEach(member => {
          if (member.id !== client.user.id && !member.user.bot) member.send(Embed).catch(() => {})
        
       
        
            }
      )
        }

},
  
    conf: {},

  help: {
    name: "divembed",
    category: "Ajuda",
    description: "Divulga seu Server",
    usage: "divembed"
  }
}
