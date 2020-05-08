const { Gays } = require('../db')

async function createGay(name) {
	let res = ''
	const gay = await Gays.findOne({ where: { name: name } })
	if (!gay) {
		const body = {
			name: name,
			gayBoyPoints: 0,
			playedMatches: 0
		}
		try {
			const newGay = await Gays.create(body)
			res = newGay
			return res
		}
		catch (err) {
			throw new Error('Error de base de datos, esquere')
		}
	}
	else {
		throw new Error('Ya existe ese gei')
	}
}

async function playRounds(name, rounds) {
	const gay = await Gays.findOne({ where: { name: name } })
	if (!gay) {
		throw new Error('No se ha creado ese gei, gei')
	}
	else {
		if (name === 'Fidel de la Mem') {
			await Gays.update({ gayBoyPoints: gay.playedMatches * 0.5 }, { where: { name: name } })
		}
		await Gays.update({ playedMatches: gay.playedMatches + rounds }, { where: { name: name } })
	}
}

async function lastPlace(name) {
	const gay = await Gays.findOne({ where: { name: name } })
	if (!gay) {
		throw new Error('No se ha creado ese gei, gei')
	}
	else {
		await Gays.update({ gayBoyPoints: gay.gayBoyPoints + 1 }, { where: { name: name } })
	}
}

async function bigGay() {
	const bigGayCount = await Gays.max('gayBoyPoints')
	const gay = await Gays.findOne({ where: { gayBoyPoints: bigGayCount } })
	return gay
}

module.exports = {
	createGay,
	playRounds,
	lastPlace,
	bigGay
}