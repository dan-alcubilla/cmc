import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class History extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public cedula: string

  @column()
  public birthday: Date

  @column()
  public email: string

  @column()
  public cellphone: string

  @column()
  public filiation: string

  @column()
  public profession: string

  @column()
  public address: string

  @column()
  public nationality: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
