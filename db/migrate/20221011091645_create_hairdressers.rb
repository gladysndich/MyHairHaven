class CreateHairdressers < ActiveRecord::Migration[7.0]
  def change
    create_table :hairdressers do |t|
      t.string :name
      t.integer :phone_number
      t.string :image

      t.timestamps
    end
  end
end
