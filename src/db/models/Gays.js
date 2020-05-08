const Sequelize = require('sequelize')

const errors = require('../../utils/validationErrors')

class Gays extends Sequelize.Model {
    static init (sequelize) {
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
            gayBoyPoints: {
                type: Sequelize.DECIMAL
            },
            playedMatches: {
                type: Sequelize.INTEGER
            }
        }, {
            sequelize,
            paranoid: true,
            hooks: {}
        })
    }
}

module.exports = Gays