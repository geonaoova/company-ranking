import Knex from 'knex'
import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class Connection {
  public connection (): Knex {
    return Knex({
      client: 'sqlite3',
      connection: {
        filename: process.env.DB_DIRECTORY
      },
      useNullAsDefault: true
    })
  }
}

export default new Connection().connection()
