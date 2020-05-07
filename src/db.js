const config = require('../src/db/config')
const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs
    .readdirSync('../src/db/models')
    .forEach(file => {
        const modelPath = path.resolve('../src/db/models', file)
        let model = require(modelPath)
        db[model.name] = model.init(sequelize)
        console.log(`Loaded ${model.name} model`)
    })

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
          db[modelName].associate(db)
          console.log(`Associated ${modelName}`)
        }
      })
      
      db.sequelize = sequelize
      db.Sequelize = Sequelize
      db._dbConfig = config
      
      module.exports = db
