/**
 * O Comando "serverinfo" mostrará informações do servidor
 */

const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.RichEmbed()
      .setColor("#8b00fa")
      .setAuthor(' ⚙ Meus Comandos')
      .addField('**<:bot_badgestaff:718446126658879518> Moderação**', '**Ban | Kick | Mute | Lock | Warn | Unban | Unmute | Unlock | Clear**', true)
      .addField('**<a:Random3PSY:720049345168277554> Diversão**', '**Tapa | Beijar | Abraçar | Laranjo | 1vs1 | Avatar | Ship | Pergunta**')
      .addField('**<a:parceiro:715739145053667379> Utilitários**', '**Say | Serverinfo | Roleall | Sorteio | Userinfo | Votacao | servericon**', true)
      .addField('**<a:YellowCoroa4:715949264370532442> Ajuda**', '**Ajuda | Convite | Suporte | Ping | Botinfo**')
      .addField('**<:DefesaPOD:723742782270996590> Defesa**', '**Antiinvite **')
      .addField('**<a:NixingFixo:704106690877849621> Prefix**', '`s.`', true)
      .addField('**<a:YellowEstrela:715738366712348724> Comandos**', '**28**', true)
      .setFooter('2020 © UniBot.')
      .setTimestamp()

    // Aqui sera enviado o embed no canal que o usuário executo o comando
    message.channel.send(embed)
  
      .then(msg => msg.delete(35000));
},

  /**
     * Aqui podemos colocar mais algumas configurações do comando.
     */
  conf: {},

  /**
     * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
     */
  get help () {
    return {
      name: 'ajuda',
      category: 'Info',
      description: 'Mostra informações sobre a bot',
      usage: 'ajuda'
    }
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
