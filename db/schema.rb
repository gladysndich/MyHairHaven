# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
<<<<<<< HEAD
ActiveRecord::Schema[7.0].define(version: 2022_10_11_091645) do
  create_table "hairdressers", force: :cascade do |t|
    t.string "name"
    t.integer "phone_number"
    t.string "image"
=======
ActiveRecord::Schema[7.0].define(version: 2022_10_11_092541) do
  create_table "hairstyles", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.integer "price"
    t.integer "duration"
    t.integer "hairdresser_id"
>>>>>>> e8e43412b0173377384f97f52f12a261377f4067
=======
ActiveRecord::Schema[7.0].define(version: 2022_10_11_094734) do
  create_table "appointments", force: :cascade do |t|
    t.integer "time"
    t.integer "customer_id"
    t.integer "hairdresser_id"
>>>>>>> a9b39ad (appointment model)
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end