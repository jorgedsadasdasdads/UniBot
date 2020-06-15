if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')


const Discord = require('discord.js')
const client = new Discord.Client()
client.startTime = Date.now()

console.log('log', `Carregando o total de ${cmdFiles.length} comandos.`)


    console.log('log', `Carregando comando: ${props.help.name}`)

    if (props.init) props.init(client)




client.login(process.env.AUTH_TOKEN) /* Inicia o Bot. */
