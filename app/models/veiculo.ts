import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare marca: string

  @column()
  declare modelo:string

  @column()
  declare anoFabricacao: number
  
  @column()
  declare anoModelo: number

  @column()
  declare renavam: number

  @column()
  declare placa: string

  @column()
  declare cor: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}