class CreateHairstyles < ActiveRecord::Migration[7.0]
  def change
    create_table :hairstyles do |t|
      t.string :title
      t.string :image
      t.integer :price
      t.integer :duration
      t.integer :hairdresser_id

      t.timestamps
    end
  end
end
