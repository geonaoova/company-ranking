import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_DIRECTORY
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, 'src', 'config', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'config', 'database', 'seeds')
  }
}
