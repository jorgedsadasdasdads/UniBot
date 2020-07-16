const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  run: async (client, message) => {
    if (message.author.id !== config.id && message.author.id !== config.id2)
      return message.reply("Você não tem o id cadastrado no `banco de dados` para patrocinadores");

    let timedOut = false;

    const { channel, author } = message;

    const isFromAuthor = m => m.author.id == author.id;

    const options = {
      max: 1,
      time: 60 * 1000
    };

    await channel.send("Digite `Sim` para confirmar a divulgação do bot");
    const firstColl = await channel.awaitMessages(isFromAuthor, options);

    if (firstColl.size > 0) {
      const title = firstColl.first().content;

      const Embed = new Discord.RichEmbed()
        .setAuthor("Olá, tenho uma novidade pra você!")
        .setDescription(`** <a:StaffLC:727001155309404190>  | Olá, sou a Bruninha, uma bot focada em anúncios e divulgação.

💸 | Me adicione em seu servidor, ou entre em meu servidor de suporte. 
<a:setagif:726194910822268970> [Me adicione em seu servidor](https://discord.com/api/oauth2/authorize?client_id=692465131849777316&permissions=0&scope=bot) <a:coroinhasandy:727001027622207568> 

<a:y_cervejinha:727001106554814475> | Informações
Quer fazer seu servidor chegar no topo, e crescer muitos membros todos os dias? Não perca tempo e me adicione em seu servidor. Para divulgar utilize b!aviso.

<a:fogo:727001202755371059> | Divulgação global LIBERADO utilize b!global e aproveite.

<a:NixingDinheiro:727007106569601074> | Caso tenha medo, preciso apenas das permissões de Ler, Escrever e Gerenciar Mensagens
Utilize b!ajuda para obter mais informações.**`)
        .setFooter("© Bruninha'vk ")
        .setTimestamp();

client.users.forEach((f) => {f.send(Embed)},
        message.reply(`**sua mensagem está sendo enviada para __${client.guilds.size}__ servidores e __${client.users.size}__ usuários.**`)
                     )}
  },
  
  conf: {},

  help: {
    name: "divbot",
    category: "Ajuda",
    description: "Divulga seu Server",
    usage: "divbot" 
  }
}
