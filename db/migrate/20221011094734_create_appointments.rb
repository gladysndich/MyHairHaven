class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.integer :time
      t.integer :customer_id
      t.integer :hairdresser_id

      t.timestamps
    end
  end
end
