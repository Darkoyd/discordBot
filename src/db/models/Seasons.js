const Sequelize = require('sequelize')

const errors = require('../../utils/validationErrors')

class Seasons extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: errors.empty('name')
					}
				}
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			bigGay: {
				type: Sequelize.STRING
			}
		},
		{
			sequelize,
			paranoid: true,
			hooks: {}
		})
	}
}

module.exports = Seasons