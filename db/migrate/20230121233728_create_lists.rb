class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :name
      t.string :poster_path
      t.string :backdrop_path
      t.string :release_date
      t.string :overview
      t.integer :vote_average
      t.integer :vote_count
      t.integer :movie_id
      t.belongs_to :person
      t.timestamps
    end
  end
end