const Discord = require('discord.js');
const quickdb = require('quick.db')

module.exports = {
  run: async (client, message, args) => {
 
let antiinvite = args.join(" ")

if(!antiinvite) return message.reply("use o formato s.anti-invite <on/off>")
        
if(antiinvite === "on") {
quickdb.set(`${message.guild.id}_antiinvite`, true)
 
  message.channel.send(`<a:SIM:723738753255997474> <:setagif:723714864505290832> ${message.author} ativou meu sistema de anti-invite <a:minecraft:722299642372554752> `)
  
} else if(antiinvite === "off") {
quickdb.set(`${message.guild.id}_antiinvite`, false)
message.channel.send(`<a:NaoBS:723741855572819969> <:setagif:723714864505290832> ${message.author} desativou meu sistema de anti invite <a:minecraft:722299642372554752>`)
}

},
     conf: {},

  help: {
    name: 'antiinvite',
    category: 'Moderação',
    description: 'Bane um usuário do servidor!',
    usage: 'antiinvite'
  }
}
