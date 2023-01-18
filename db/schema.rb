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

ActiveRecord::Schema[7.0].define(version: 2023_01_18_183308) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "avatars", force: :cascade do |t|
    t.string "name"
    t.string "imgUrl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "name"
    t.string "poster_path"
    t.string "backdrop_path"
    t.string "release_date"
    t.string "overview"
    t.integer "vote_average"
    t.integer "vote_count"
    t.integer "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "my_lists", force: :cascade do |t|
    t.string "name"
    t.string "poster_path"
    t.string "backdrop_path"
    t.string "release_date"
    t.string "overview"
    t.integer "vote_average"
    t.integer "vote_count"
    t.integer "movie_id"
    t.bigint "user_id"
    t.bigint "user_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_account_id"], name: "index_my_lists_on_user_account_id"
    t.index ["user_id"], name: "index_my_lists_on_user_id"
  end

  create_table "user_avatars", force: :cascade do |t|
    t.string "imgUrl"
    t.bigint "user_id"
    t.bigint "user_account_id"
    t.bigint "avatar_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["avatar_id"], name: "index_user_avatars_on_avatar_id"
    t.index ["user_account_id"], name: "index_user_avatars_on_user_account_id"
    t.index ["user_id"], name: "index_user_avatars_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "profile_img"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_users_on_account_id"
  end

end
