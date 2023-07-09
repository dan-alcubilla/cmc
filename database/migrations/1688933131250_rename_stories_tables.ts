import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rename_stories_tables'

  public up () {
    this.schema.renameTable('stories', 'histories')
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
