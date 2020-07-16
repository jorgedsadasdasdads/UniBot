if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

require('dotenv').config()

const Discord = require('discord.js')
const { readdirSync } = require('fs')
const Enmap = require('enmap')
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client()

client.commands = new Enmap()
client.startTime = Date.now()

const cmdFiles = readdirSync('./commands/')
console.log('log', `Carregando o total de ${cmdFiles.length} comandos.`)

cmdFiles.forEach(f => {
  try {
    const props = require(`./commands/${f}`)
    if (f.split('.').slice(-1)[0] !== 'js') return

    console.log('log', `Carregando comando: ${props.help.name}`)

    if (props.init) props.init(client)

    client.commands.set(props.help.name, props)
    if (props.help.aliases) {
      props.alias = true
      props.help.aliases.forEach(alias => client.commands.set(alias, props))
    }
  } catch (e) {
    console.log(`Impossivel executar comando ${f}: ${e}`)
  }
})

const evtFiles = readdirSync('./events/')
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
})

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'l!ajuda') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Ajuda - Larinha v$')
      .setDescription(`**<a:coroinhasandy:727001027622207568> | Comandos da Larinha v$** \n
<:seta:726196684211617943> l!aviso 
<:seta:726196684211617943> l!divembed
<:seta:726196684211617943> l!invite
<:seta:726196684211617943> l!ajuda
<:seta:726196684211617943> l!avatar
<:seta:726196684211617943> l!botinfo
`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on("guildCreate", guild => {

  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
});


client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: {guild.id})`);
});

client.on('message', message => {
  
if(message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)){
    return message.channel.send(' <a:CoroaTKF:726199479635673179> | Oih, tudo bem? está precisando de ajuda? digite l!ajuda e veja meus comandos, você não vai se arrepender!') 
}
});


client.login(process.env.AUTH_TOKEN)      