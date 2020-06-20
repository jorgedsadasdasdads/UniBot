const Discord = require("discord.js");

module.exports = {
run: async (client, message, args, prefix) => {
  
  const final = "Sandy'Bot - © Todos os direitos reservados"
  
  const comousar = new Discord.RichEmbed()
    .setAuthor(" Sandy '爱", client.user.avatarURL)
    .setTitle("<a:Random3PSY:720049345168277554> Sorteio")
    .setDescription(`Irá iniciar um sorteio.`)
    .setColor("8b00fa")
    .addField(
      "<a:taokTPU:719256514769977425> Como usar",
      `\`s.sorteio (Tempo em Minutos) (Prêmio)\`\n**Exemplo:** s.sorteio 60 Nitro`
    )
    .addField(
      "<:Gearrr:718445943078256682> Permissão",
      "O staff que for fazer o sorteio tem que está em um cargo com a permissão `Gerenciar Servidor`"
    )
    .addField(
      "<a:redsirene:717503821777076294> Atenção:",
      "Caso encontre algum erro/bug entre imediatamente em nosso suporte, que será recompensado!"
    );

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message
  
      .reply(`Você não possuí permissão para iniciar sorteios!`)
  
  let time = args[0];
  if (!time)
    
    
    return message.channel
      .send(message.author, comousar)
  
  const sorting = args.slice(1).join(" ");
  if (!sorting)
    
    return message.channel
      .send(message.author, comousar)
      .then(msg => msg.delete(10000));

  const timea = time * 1000 * 60;
  const embed = new Discord.RichEmbed()
  
    .setAuthor(` | ${sorting}`, "https://cdn.discordapp.com/emojis/707250812832710707.png?size=2048")
    .setDescription(`<a:Pinkseta:717464651109105675> **Clique na estrela para entrar no sorteio** \nㅤ<a:Pinkseta:717464651109105675> **Duração: ${time} minuto(s)**`)
    .setColor("#8b00fa")
    .setFooter(final, "https://cdn.discordapp.com/avatars/706674488032624700/1efdb4a4c21c739964d1cc4a4f1a3904.png?size=2048");

  message.channel
    .send(`.`, embed)
    .then(g => {
      g.react("717516434648858664");
    
      var collector = g.createReactionCollector(
        (r, u) => r.emoji.id === "717516434648858664"
      );
    
      collector.on("end", r => {
        if (!r.first()) {
          
          const embed2 = new Discord.RichEmbed()
            .setAuthor(`| ${sorting}`, "https://cdn.discordapp.com/emojis/707250812832710707.png?size=2048")
            .setDescription(`Ninguém participou do sorteio! :frowning:`)
            .setColor("#8b00fa")
            .setFooter(final, "https://cdn.discordapp.com/avatars/706674488032624700/1efdb4a4c21c739964d1cc4a4f1a3904.png?size=2048");
            g.clearReactions();
          
          return g.edit("<a:Random3PSY:720049345168277554>| **Sorteio encerrado!**", embed2);
        }

        var user = r
          .first()
          .users.filter(user => !user.bot)
          .random();
        
        const embed3 = new Discord.RichEmbed()
        
          .setAuthor(` | ${sorting}`, "https://cdn.discordapp.com/emojis/707250812832710707.png?size=2048")
          .setDescription(`**Ganhador: ${user}**`)
          .setColor("#8b00fa")
          .setFooter(final, "https://cdn.discordapp.com/avatars/706674488032624700/1efdb4a4c21c739964d1cc4a4f1a3904.png?size=2048");
        g.clearReactions();
        g.edit(`.`, embed3);
        
        message.channel.send(`:partying_face:  | Parabéns ${user}, você ganhou o sorteio **${sorting}**`);
        
      });
      setTimeout(() => {
        collector.stop();
      }, timea);
    });
},
  
  conf: {},

  get help () {
    return {
      name: 'sorteio',
      category: 'Utilidades',
      description: 'Cria um sorteio.',
      usage: 'sorteio'
    }
  }
}