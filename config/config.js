require('dotenv').config()
module.exports = {
  development: {
    database: 'door_drop_development',
    dialect: 'postgres'
  },
  test: {
    database: 'door_drop_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
