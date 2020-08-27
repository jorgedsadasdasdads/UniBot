/////// HOSPEDAGEM DA GLITCH ///

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("banco.json");
const db = low(adapter);
const http = require("http");
const express = require("express");
const { Client, RichEmbed } = require('discord.js');

const app = express();
app.get("/", (request, response) => {
  console.log(`${Date.now()} Ping recebido`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// BAIXAR ARQUIVOS NECESSÁRIOS

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");

const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const { Util } = require("discord.js");
const moment = require("moment");
const config = require("./config.json");
require("moment-duration-format");

moment.locale("pt-BR");
const { prefix, token, dono } = config;
const bot = client;

// MENCIONAR

client.on("message", message => {
  if (message == "<@713980516902371419>") {
    message.reply(
      "> Está com dúvidas?, utilize o comando **k.ajuda** para saber meus comandos, ou entre no meu Suporte."
    );
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'k.ajuda') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Está com dúvidas de como me utilizar?')
      // Set the color of the embed
      .setColor('#8b00fa')
      // Set the main content of the embed
      .setDescription(`**Comandos da Kom Music:**
<a:disco:708111605593800714> **k.play** (ou t.tocar) toca uma música desejada
<a:disco:708111605593800714> **k.pause** (ou t.pausar) pausa a música desejada
<a:disco:708111605593800714> **k.stop** (ou t.parar) para a música por completo
<a:disco:708111605593800714> **k.queue** Mostra a lista de músicas que irão tocar
<a:disco:708111605593800714> **k.np** Mostra as músicas tocadas no momento.
<a:disco:708111605593800714> **k.skip** Pula uma música
<a:disco:708111605593800714> **k.volume** <1/infinito>
<a:disco:708111605593800714> **k.resume** Retorna a música atual reproduzida.`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'k.help') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Está com dúvidas de como me utilizar?')
      // Set the color of the embed
      .setColor('#8b00fa')
      // Set the main content of the embed
      .setDescription(`**Comandos da Kom Music:**
<a:disco:708111605593800714> **k.play** (ou t.tocar) toca uma música desejada
<a:disco:708111605593800714> **k.pause** (ou t.pausar) pausa a música desejada
<a:disco:708111605593800714> **k.stop** (ou t.parar) para a música por completo
<a:disco:708111605593800714> **k.queue** Mostra a lista de músicas que irão tocar
<a:disco:708111605593800714> **k.np** Mostra as músicas tocadas no momento.
<a:disco:708111605593800714> **k.skip** Pula uma música
<a:disco:708111605593800714> **k.volume** <1/infinito>
<a:disco:708111605593800714> **k.resume** Retorna a música atual reproduzida.`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'k.botinfo') {
    const embed = new Discord.RichEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setAuthor('🤖 Minhas informações')
      .addField(`Kom Music`)
      .addField('**Meu ID**' `${client.user.id}`)
      .addField('**Servidores**' `${client.guilds.size}`)
      .addField('**Usuários**' `${client.users.size}`)
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()
message.channel.send(embed); 
  }
})
// CONSOLE

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
  );
  client.user.setPresence({
    game: {
      name: config.Status,
      type: "STREAMING",
      url: "https://www.twitch.tv/snexdlc"
    }
  });

  // STATUS DO BOT

  const status = [
    {
      name: `💜 | você é fantástico!`,
      type: "STREAMING",
      url: "https://www.twitch.tv/snexdlc"
    },
    {
      name: `🌏 | Estou em ${client.guilds.size} servidores!`,
      type: "STREAMING",
      url: "https://www.twitch.tv/snexdlc"
    },
    { name: "🍀 | meu prefix é t.", type: "STREAMING" },
    { name: "🦄 | Me adicione em seu servidor para ouvir uns batidões." }
  ];

  // NÃO SEI

  function st() {
    const rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 7000); // 10000 = 10Ms = 10 segundos
});

// BOAS VINDAS

const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyBemETCpgfgYWhmXRyaP6PWMv01UXpiJ4U");

// MÚSICA

client.on("message", async message => {
  if (message == "t.ajuda") {
    let embed = Discord.RichEmbed().setAuthor("| Ajuda", client.user.avatarURL)
      .setDescription(`**
Olá ${message.author}, seja bem vindo ao meu painel de ajuda!
t.play - para ouvir musicas

**`);
    message.channel.send(embed);
  }

  var args = message.content.substring(config.prefix.length).split(" ");
  if (!message.content.startsWith(config.prefix)) return;
  var searchString = args.slice(1).join(" ");
  var url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  var serverQueue = queue.get(message.guild.id);
  message.delete();
  switch (args[0].toLowerCase()) {
    case "play" || "tocar":
      var voiceChannel = message.member.voiceChannel;
      if (!voiceChannel)
        return message.channel.send(
          new Discord.RichEmbed()
            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> **│ Me desculpe, você não está conectado a um canal de voz!**"
            )
        );
      var permissions = voiceChannel.permissionsFor(message.client.user);

      if (!permissions.has("CONNECT")) {
        return message.channel.send(
          new Discord.RichEmbed()
            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> **│ Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões necessárias!**"
            )
        );
      }

      if (!permissions.has("SPEAK")) {
        return message.channel.send(
          new Discord.RichEmbed()
            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> **│ Eu não posso falar neste canal de voz, verifique se eu tenho as permissões necessárias!**"
            )
        );
      }
      if (
        url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)
      ) {
        var playlist = await youtube.getPlaylist(url);
        var videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
          var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
          await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
        }

        return message.channel
          .send(
            new Discord.RichEmbed()
              .setColor("#8b00fa")
              .setDescription(
                `<a:disco:708111605593800714> **│ Playlist:** \n\```fix\n• ${playlist.title}\``` **foi adicionado a PlayList!**\n**• Autor:** ${message.author}`
              )
          )
          .then(m => m.delete(9000));
      } else {
        try {
          var video = await youtube.getVideo(url);
        } catch (error) {
          try {
            var videos = await youtube.searchVideos(searchString, 10);
            var index = 0;

            message.channel
              .send(
                new Discord.RichEmbed()
                  .setTimestamp()
                  .setColor("#8b00fa")
                  .setDescription(
                    `<a:disco:708111605593800714> **Seleção de Música:**\n\n
 ${videos
   .map(
     video2 => `<a:disco:708111605593800714> **${++index} -** ${video2.title}`
   )
   .join("\n\n")} `
                  )
                  .setFooter(` Escolha um valor de 1-10 │ Play `)
                  .setImage(
                    `https://media.discordapp.net/attachments/570058821393711117/578300821037383690/gifroxolinha-3.gif?width=400&height=3`
                  )
              )
              .then(m => m.delete(17000));
            try {
              var response = await message.channel.awaitMessages(
                message2 => message2.content > 0 && message2.content < 11,
                {
                  maxMatches: 1,
                  time: 17000,
                  errors: ["time"]
                }
              );
            } catch (err) {
              console.error(err);
              return message.channel.send(
                new Discord.RichEmbed()
                  .setColor("#8b00fa")
                  .setTitle(
                    "<:erro:706731656425373766> **| Não houve escolha de música, seleção cancelada**"
                  )
              );
            }

            var videoIndex = parseInt(response.first().content);
            var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

            console.log(`Duração: ${video.duration.seconds}`);
          } catch (err) {
            console.error(err);

            return message.channel.send(
              new Discord.RichEmbed()

                .setColor("#8b00fa")
                .setTitle(
                  "<:lupa:706746804523237468> | Eu não consegui obter resultados!"
                )
            );
          }
        }
        return handleVideo(video, message, voiceChannel);
      }
      break;
    case "skip" || "pular" || "s":
      if (!message.member.voiceChannel)
        return message.channel.send(
          new Discord.RichEmbed()
            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> │ Você não está conectado a um canal de música!"
            )
        );

      if (!serverQueue)
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> │ Não há nada tocando, para que eu possa pular!"
            )
        );
      serverQueue.connection.dispatcher.end(
        new Discord.RichEmbed()

          .setColor("#8b00fa")
          .setTitle("<a:disco:708111605593800714> │ Música pulada!")
      );
      message.channel.send(
        new Discord.RichEmbed()
          .setColor("#8b00fa")
          .setTitle("<a:disco:708111605593800714> │ Música pulada!")
      );
      return undefined;
      break;
    case "stop":
      if (!message.member.voiceChannel)
        return message.channel.send(
          new Discord.RichEmbed()
            .setColor("#8b00fa")
            .setTitle(
              "<:erro:706731656425373766> │ Você não está conectado a um canal de música!"
            )
        );

      if (!serverQueue)
        return message.channel.send(
          new Discord.RichEmbed().setTitle(
            "<:erro:706731656425373766> │ Não a nada tocando para que possa parar!"
          )
        );
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end("Comando Stop foi usado!");
      message.channel.send(
        new Discord.RichEmbed()

          .setColor("#8b00fa")
          .setTitle(
            "<a:disco:708111605593800714> │ A lista de reprodução foi excluida, para ouvir denovo use: ``s.play``"
          )
      );
      return undefined;
      break;
    case "volume":
      if (!message.member.voiceChannel)
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setDescription(
              "<:erro:706731656425373766> │ Você não está conectado a um canal de música!"
            )
        );
      if (!serverQueue)
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle("<:erro:706731656425373766> │ Não há nada tocando!")
        );
      if (!args[1])
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle(
              `<a:disco:708111605593800714> │ Volume atual é: \`${serverQueue.volume}\``
            )
        );
      serverQueue.volume = args[1];
      serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
      return message.channel.send(
        new Discord.RichEmbed()

          .setColor("#8b00fa")
          .setTitle(
            `<a:disco:708111605593800714> │ Volume definido para: \`${
              args[1]
            }\``
          )
      );
      break;
    case "np":
      if (!serverQueue)
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle("<:erro:706731656425373766> │ Não há nada tocando!")
        );
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("#8b00fa")
          .setDescription(
            `<a:disco:708111605593800714> │ Tocando agora: \`${serverQueue.songs[0].title}\``
          )
      );
      break;
    case "queue":
      if (!serverQueue)
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle("<:erro:706731656425373766> │ Não há nada tocando!")
        );
      return message.channel.send(
        new Discord.RichEmbed()

          .setDescription(
            `<a:disco:708111605593800714> │ Lista das próximas músicas:
 ${serverQueue.songs.map(song => `\`${song.title}\``).join("\n\n")}`
          )
          .setColor("#8b00fa")
      );
      break;
    case "pause":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle(
              ":stop_button: │  A listá de reprodução foi pausada, digite **s.resume** para continuar."
            )
        );
      }

      return message.channel.send(
        new Discord.RichEmbed()

          .setColor("#8b00fa")
          .setDescription("<:erro:706731656425373766> │ Não há nada tocando!")
      );
      break;
    case "resume":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setTitle(
              "<a:disco:708111605593800714> │ A lista de reprodução foi resumida."
            )
        );
      }

      return message.channel.send(
        new Discord.RichEmbed()

          .setColor("#8b00fa")
          .setTitle("<a:disco:708111605593800714> │ Não há nada tocando!")
      );

      return undefined;
      break;
  }
  async function handleVideo(video, message, voiceChannel, playlist = false) {
    var serverQueue = queue.get(message.guild.id);
    console.log(video);
    var song = {
      id: video.id,
      title: video.title,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      tumb: video.thumbnails.default.url,
      seg: video.duration.seconds,
      min: video.duration.minutes,
      horas: video.duration.hours,
      canal: video.channel.title
    };
    if (!serverQueue) {
      var queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 50,
        playing: true
      };
      queue.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(song);

      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(`Eu não pude entrar no canal de voz: ${error}`);
        queue.delete(message.guild.id);
        return message.channel.send(
          new Discord.RichEmbed().setTitle(
            `<:erro:706731656425373766> **│ Eu não pude entrar no canal devido ao erro:** \n\`${error}\``
          )
        );
      }
    } else {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      if (playlist) return undefined;
      else
        return message.channel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setDescription(
              `<a:disco:708111605593800714> │ Nova música adicionada na fila: \n**• Nome:** \`\`\n${
                song.title
              }\`\`\n**• Duração:** \`${(song.horas < 10
                ? "0" + song.horas
                : song.horas) +
                ":" +
                (song.min < 10 ? "0" + song.min : song.min) +
                ":" +
                (song.seg < 10 ? "0" + song.seg : song.seg)}\`\n**• Autor:** ${
                message.author
              }`
            )
        );
    }
    return undefined;
  }
  function play(guild, song) {
    var serverQueue = queue.get(guild.id);

    if (!song) {
      !serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url))
      .on("end", reason => {
        message.channel.send();
        if (reason === "O fluxo não está gerando com rapidez suficiente.")
          console.log("Músicas terminadas.");
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 50);
    youtube
      .searchVideos(args, 1)
      .then(results => {
        moment.locale("pt-BR");
        serverQueue.textChannel.send(
          new Discord.RichEmbed()

            .setColor("#8b00fa")
            .setThumbnail(results[0].thumbnails.high.url)
            .setDescription(
              `<a:disco:708111605593800714> **│ Começando a tocar:** \n\n**• Nome:** \`${
                song.title
              }\`\n**• Duração:** \`${(song.horas < 10
                ? "0" + song.horas
                : song.horas) +
                ":" +
                (song.min < 10 ? "0" + song.min : song.min) +
                ":" +
                (song.seg < 10
                  ? "0" + song.seg
                  : song.seg)}\`\n**• Nome do canal:** \`\`\n${
                results[0].channel.title
              }\`\`\n**• Publicado em:** \`\`\n${
                results[0].publishedAt
              }\`\`\n**• Link:** [Clique Aqui](https://youtu.be/${
                results[0].id
              })`
            )
        );
      })
      .catch();
  }
});



// TOKEN DO BOT

client.login(config.token);
