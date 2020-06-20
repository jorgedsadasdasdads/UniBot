const Discord = require('discord.js')

module.exports = {
  run: async (client, msg, args) => {

    let piadas = [

   'sabe qual é o cumulo da burrice? \n um astrounauta reclamar por falta de espaço',
   'sabe como transformar um giz numa cobra? \ntaca o giz na agua que o gizboia',
   'galera vazou a seleção de camarões da copa: \n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n**-**🦐\n jogadores acima',
   'sabe porque o napoleão sempre é chamado para as festas? \nporque ele é bom na party (bonaparte)',
   'sabe porque o gato mia pra lua e a lua não mia pro gato? \n porque astro no mia',
   'uma baleia deu um tiro em outra baleia, como sai a noticia no jornal? \n baleia baleia baleia',
   'o alejado chegou no cego e falou: \n alejado: "nossa mano,olha que mina gostosa"\n o cego falou: \n cego: "então porque tu n vai correndo até ela" ',
   'um dia um sabio homem disse: "namore uma cega e traia ela com uma muda", assim, "sua namorada n vai ver e a sua amante n vai contar" ',
   'sabe porque o roberto carlos é considerado rei? \n porque no show dele só vai coroa',
   '<a:alerta:708105435487404124> alerta de golpe <a:alerta:708105435487404124> \ngalera cuidado que tem um cara vendendo peneira para os vizinhos,não comprem, é furada',
   '<a:alerta:708105435487404124> alerta de golpe <a:alerta:708105435487404124> \n galera cuidado que tem um cara vendendo oculos sem lente é armação passem para os outros',
   'a formiga1 chegou na formiga2  e disse: \n "oi eu sou a fu", ela respondeu: "que fu?", a formiga1 disse: "fumiga", a formiga2 falou "e eu sou ota", a formiga um disse: "que ota", a formiga2 falou, "otavio mesquita" '  
    ]
    await msg.channel.send({
      embed: {
        color: '15105570',
        title: 'piadas',
        description: piadas[Math.floor(Math.random() * piadas.length)],
        footer: {
          text: `quem me fez contar piada ${msg.member.displayName}`
        }
      }
    });
  },
  
       conf: {},

  help: {
    name: 'piada',
    category: 'Ajuda',
    description: 'Me convide para seu servidor!',
    usage: 'piada'
  }
}

  