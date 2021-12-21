const Discord = require('discord.js');
const client = new Discord.Client();
const token = "OTEyMzY5MTY3NDgxNTgxNjA4.YZu8AA._Q-dj0DAaOrBs5y53_Bt7_xG57U"
const path = require('path');


client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(process.env.token);

client.on("message", message => {
    if (message.content === "!indice") {
      message.channel.send("essaye de réussir le pacman, tu auras un indice à la fin, pour trouver le pacman")
    }
  })
client.on("message", message => {
    if (message.content === "!lien") {
      message.channel.send("copie colle ce message : +play https://www.youtube.com/watch?v=PAiY4r3fI0k&ab_channel=ConstantDassonville")
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


