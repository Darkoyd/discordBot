const config = require("../src/db/config")
const { Sequelize } = require("sequelize")

const db = {}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

const model = require("../src/db/models/Gays.js")
db[model.name] = model.init(sequelize)
console.log("Loaded model")

db.sequelize = sequelize
db.Sequelize = Sequelize
db._dbConfig = config

async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test()

module.exports = db
