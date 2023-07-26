import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Consultation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reason: string

  @column()
  public personal_history: string

  @column()
  public family_background: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
