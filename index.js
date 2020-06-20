if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

require('dotenv').config()

const Discord = require('discord.js')
const db = require("quick.db")
const { readdirSync } = require('fs')
const Enmap = require('enmap')
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const keepalive = require('express-glitch-keepalive');
const app = express();
app.use(keepalive);
app.get('/', (req, res) => {
res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);

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
  // If the message is "p"
  if (message.content === 's.suporte') {
    // Send "pong" to the same channel
    message.channel.send('<a:NixingSeta1:704106890589634560> **Entre no meu servidor de suporte e fique por dentro de todas as atualizações que rolam na Sandy <a:NixingFixo:704106690877849621> ** https://discord.gg/u6vrdtw');
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 's.convite') {
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('<a:YellowCoroa4:715949264370532442> Me convide para seu servidor!')
      // Set the color of the embed
      .setColor('#8b00fa')
      // Set the main content of the embed
      .setDescription(`<a:Pinkseta:717464651109105675> **Olá, gostou de minhas funções? <a:NixingFixo:722114161768661133> 
Me adicione em seu servidor clicando** [AQUI](https://discord.com/oauth2/authorize?client_id=721879918664876132&scope=bot&permissions=268443710)`);
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
    return message.channel.send(' :tropical_drink: | Olá, está precisando de ajuda? utilize `s.ajuda` e veja meus comandos!') 
}
});

client.on("message", async message => {
  
  let antiinvite = db.get(`${message.guild.id}_antiinvite`)

  if(antiinvite === true) {
     
  let blacklisted = ['discord.gg'];
  
  let FoundinText = false;
  for (var i in blacklisted){
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) FoundinText = true;
    
    if (FoundinText){
      message.delete()
      message.reply('Você não pode divulgar link de outros servidores aqui!')
      
    
    }
  }
  }
})



client.login(process.env.AUTH_TOKEN) /* Inicia o Bot. */
