const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {

    run: function (client, message, args) {
        let user1 = args[0];
        let user2 = args.slice(1).join(' ');
        if (!user1) return message.channel.send("Você não colocou um dos membros a serem shippados")
        if (!user2) return message.channel.send("Você não colocou um dos membros a serem shippados")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship <= 50) {
                    const badmatch = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(" Xiiiii:/ ❌"  + " Infelizmente não tenho esperanças")
                    .setDescription(":broken_heart: " + ship + "% :broken_heart:");
                    message.channel.send(badmatch);
           } else if (ship === 100) {
                const perfectmatch = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle("♥ Uiih, será um novo casal á espera? rsrs" + "Foram feitos um para o outro ♥")
                    .setDescription(":heart: " + ship + "% :heart:");
                    message.channel.send(perfectmatch);
           } else {
               const match = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle("😍"  + " Huuumm, se combinam muito bem rsrs")
                    .setDescription(":heart: " + ship + "% :heart:");
                    message.channel.send(match);
            }
},

conf: {},

  get help () {
    return {
      name: 'ship',
      category: 'Diversão',
      description: 'Shippa os membros mais um para o outro do servidor!.',
      usage: 'ship'
    }
  }
}