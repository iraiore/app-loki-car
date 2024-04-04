import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.integer('ano_fabricacao').notNullable()
      table.integer('ano_modelo').notNullable()
      table.integer('renavam').nullable()
      table.string('placa').nullable()
      table.string('cor').nullable()

      table.enum('situacao',['liberado','manutencao'])

      table.boolean('ativo').defaultTo(true)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}