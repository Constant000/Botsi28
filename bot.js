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
      message.channel.send("rejoint le salon vocal est envoie moi !play, je te rejoindrai.")
    }
  })

client.on("message", message => {
  if (message.content === "!play") {
    if (!message.member.voice.channel) return message.reply("You have to be in a VoiceChannel");
      message.member.voice.channel.join().then(VoiceConnection => {
          VoiceConnection.play(ytdl("https://www.youtube.com/watch?v=hEwqCjYeaFs&ab_channel=TIKTOKSOUND")).on("finish", () => 
          VoiceConnection.disconnect());
          message.reply("done");
    }).catch(e => console.log(e))
  }
})
