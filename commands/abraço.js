const Discord = require('discord.js');
    fetch = require('node-fetch');

module.exports = {
run: async (client, message, args) => {
 
    const apiKey = 'S7TF4CPQ4ZDW';
    const limit = 8;
    const searchTerm = 'kiss+anime';
    const url = `https://api.tenor.com/v1/search?tag=${searchTerm}&key=${apiKey}&limit=${limit}`;

    fetch(url).then(res => res.json()).then(body => {

        let beijado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!beijado) return message.channel.send("Mencione alguém para beijar");

        const embed = new Discord.RichEmbed()
        .setDescription(`**${message.author}** Deu uma beijoca em **${beijado}**`)
        .setColor("PINK")
        .setImage(body.results[Math.floor(Math.random() * limit)].media[0].gif.url);

        message.channel.send(embed);
    });
},


  conf: {},

  help: {
    name: 'abraçar',
    category: 'Diversão',
    description: 'Abraça um usuário mencionado',
    usage: 'abraçar'
  }
}