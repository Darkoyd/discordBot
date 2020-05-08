const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()
const CRUD = require('../src/services/CRUD.js')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (message) => {
	const args = message.content.split(' ')
	const caller = message.author.username
	const botOut = message.channel

	if (args[0] === 'gei') {
		switch (args[1]) {
		// Register
		case 'crear':
			try {
				const res = await CRUD.createGay(caller)
				botOut.send(`${res.name} ha sido creado`)
			}
			catch (error) {
				botOut.send('Ya existe ese joto')
			}
			break
		// Play match
		case 'partidas':
			if (!args[2]) {
				try {
					await CRUD.playRounds(caller, args[2])
					botOut.send(`${caller} ha jugado ${args[2]} partidas`)
				}
				catch (error) {
					botOut.send('Registrese joto')
				}
			}
			else {
				botOut.send('Falta el numero de partidas, maricón')
			}
			break
		case 'ultimo':
			try {
				await CRUD.lastPlace(caller)
				botOut.send(`Jaja, ${caller} es gei`)
			}
			catch (error) {
				botOut.send('Registrese joto')
			}
			break
		case 'bigGay':
			break
		default:
			break
		}
	}
})

client.login(process.env.BOT_TOKEN)
