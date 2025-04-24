class CreateHeros < ActiveRecord::Migration[8.0]
  def change
    create_table :heros do |t|
      t.string :name
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
  end
end
