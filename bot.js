const Discord = require('discord.js');
const client = new Discord.Client();
const token = "OTEyMzY5MTY3NDgxNTgxNjA4.YZu8AA._Q-dj0DAaOrBs5y53_Bt7_xG57U"
const path = require('path');


client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(process.env.token);

client.on("guildMemberAdd",member => {
   member.guild.channels.find("name","accueil").send('Bienvenue sur le discord ${member}, il faut etre poli avec anne, je te conseille de commencer la conversation par bonjour')
})

client.on("message", message => {
    if (message.content === "!indice") {
      message.channel.send("essaye de réussir le pacman, tu auras un indice à la fin, pour trouver le pacman parle avec anne en lui envoyant bonjour")
    }
  })
client.on("message", message => {
    if (message.content === "!lien") {
      message.channel.send("bravo, je peux avoir confiance en toi, je me souviens d'un message vocal qu'il m'avait envoyé à l'époque, je te le fais écouter si tu veux, va dans un channel vocal et copie colle ce message : +play https://youtu.be/jNcAT18p3b8")
    }
  })
client.on("message", message => {
    if (message.content === "bonjour") {
      message.channel.send("coucou toi, je suis Anne !, que fais tu sur ce discord ? c'est Kevin qui t'envoie ? (reponds par oui ou par non)")
    }
  })
client.on("message", message => {
    if (message.content === "oui") {
      message.channel.send("Oh sympa ! il va bien ? tu veux des infos sur son projet de faire exploser BF ? (reponds par yes ou par non)")
    }
  })
client.on("message", message => {
    if (message.content === "non") {
      message.channel.send("ok bah super t'as dead ca adios")
    }
  })
client.on("message", message => {
    if (message.content === "yes") {
      message.channel.send("je n'ai pas confiance, il faut que tu joues au jeu de la confiance, kevin a toujours eu confiance aux gens qui gagne à pacman, pour cela lance le jeu")
    }
  })


