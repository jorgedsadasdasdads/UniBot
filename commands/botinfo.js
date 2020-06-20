/**
 * O Comando "botinfo"mostrará informações do bot
 */

const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '<a:taokTPU:719256514769977425> Online',
      offline: '`⚫` Offline'
    }

    const embed = new Discord.RichEmbed()
      .setColor("#8b00fa")
      .setThumbnail(botAvatar)
      .setAuthor('❤ Minhas informações')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Servidores**', `<a:CoroaPSY:717069788651716630> ${servsize}`, true)
      .addField('**Usuários**', `${usersize}`, inline)
      .addField('**Estou online a**', moment().to(client.startTime, true))
      .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  
},

  conf: {},

  help: {
    name: 'botinfo',
    category: 'Utilitários',
    description: 'Mostra as informações do bot',
    usage: 'botinfo'
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
