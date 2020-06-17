import Knex, { SchemaBuilder } from 'knex'

export function up (knex: Knex): SchemaBuilder {
  return knex.schema.createTable('company', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
  })
}

export function down (knex: Knex): SchemaBuilder {
  return knex.schema.dropTable('company')
}
