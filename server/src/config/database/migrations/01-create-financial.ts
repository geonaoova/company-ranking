import Knex, { SchemaBuilder } from 'knex'

export function up (knex: Knex): SchemaBuilder {
  return knex.schema.createTable('financial', table => {
    table.increments('id').primary()
    table.integer('financialId').notNullable()
    table.string('type').notNullable()
    table.integer('companyId').references('company.id').notNullable()
  })
}

export function down (knex: Knex): SchemaBuilder {
  return knex.schema.dropTable('financial')
}
