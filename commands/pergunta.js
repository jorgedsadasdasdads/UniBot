module.exports = {

    run: function (client, msg, args) {
    const respostas = [
        'Certamente que sim',
        'Meus antepassados dizem que não',
        'Nem tenho resposta para isso, oxente!',
        'Não tenho certeza disso, brother',
        'Mas que falta de respeito essa pergunta, pau no seu cu!',
        'Não sou obrigada a responder isso, sorry!',
        'Eu realmente não faço a minima ideia.',
        'Pelo oque tudo parece, sim!',
        'Gostaria de sabe essa resposta :/',
        'Acho que você deveria ficar quieto.',
        'Tchau, vou comer baby.',
        'Me poupe, que pergunta é essa?',
        'Sua mãe diria que sim.'
        
    ];
    const rand = respostas[Math.floor(Math.random() * respostas.length)];
    msg.channel.startTyping();
    msg.channel.send({embed:{
        color: 0x46be30,
        fields: [
            {
                name: "Pergunta: " + args.join(" "),
                value: "**Resposta:** " + rand
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        },
    }});
    msg.channel.stopTyping();
},

conf: {},

  get help () {
    return {
      name: 'pergunta',
      category: 'Diversão',
      description: 'Responde um usuário do servidor.',
      usage: 'pergunta'
    }
  }
}