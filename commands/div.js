const Discord = require("discord.js")

module.exports = {
run: async (client, message, args) => {
if (message.author.id !== '579124195905241099') return message.reply("\🌐 | Para user esse comando e preciso ser patrocinador fale com @BDL O Inútil 🍀#0001.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(`${f}, ${mensagem}`)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)},

conf: {},

  help: {
    name: 'div',
    category: 'div',
    description: 'div',
    usage: 'div'
  }
}