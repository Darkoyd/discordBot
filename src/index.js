const Discord = require('discord.js')
require('dotenv').config() 
const client = new Discord.Client()

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`)
 })

 client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'Suda') {
      // Send the user's avatar URL
      message.channel.send('Sudaaaaaaaaaaaaaa', {disableMentions: 'all'});
    }
  })
  

client.login(process.env.BOT_TOKEN);