import Knex from 'knex'

export async function seed (knex: Knex) {
  await knex('company').insert([
    { name: 'Empresa xyz' },
    { name: 'Gugou' },
    { name: 'Amason' },
    { name: 'intéu' },
    { name: 'Face Burger' }
  ])
}
