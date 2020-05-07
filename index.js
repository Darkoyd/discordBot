const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 console.log(msg)
 }
 });

client.login('NzA4MDI4OTg0MzEwNDk3MzAy.XrRasw.RVj_X5oV0Y2CqUiuG5H3f7CPp3c');