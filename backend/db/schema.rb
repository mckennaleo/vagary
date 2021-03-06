# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200907015828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name"
    t.string   "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "playlist"
  end

  create_table "favourites", force: :cascade do |t|
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.string   "city"
    t.string   "landmark"
    t.string   "description"
    t.index ["user_id"], name: "index_favourites_on_user_id", using: :btree
  end

  create_table "quiz_questions", force: :cascade do |t|
    t.string   "question"
    t.string   "correct_answer"
    t.string   "incorrect_answer_1"
    t.string   "incorrect_answer_2"
    t.string   "incorrect_answer_3"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "quiz_id"
    t.index ["quiz_id"], name: "index_quiz_questions_on_quiz_id", using: :btree
  end

  create_table "quiz_results", force: :cascade do |t|
    t.float    "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "quiz_id"
    t.integer  "user_id"
    t.index ["quiz_id"], name: "index_quiz_results_on_quiz_id", using: :btree
    t.index ["user_id"], name: "index_quiz_results_on_user_id", using: :btree
  end

  create_table "quizzes", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "city_id"
    t.index ["city_id"], name: "index_quizzes_on_city_id", using: :btree
  end

  create_table "translations", force: :cascade do |t|
    t.string   "phrase"
    t.integer  "city_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_translations_on_city_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "favourites", "users"
  add_foreign_key "quiz_questions", "quizzes"
  add_foreign_key "quiz_results", "quizzes"
  add_foreign_key "quiz_results", "users"
  add_foreign_key "quizzes", "cities"
  add_foreign_key "translations", "cities"
end
