class CreateMyLists < ActiveRecord::Migration[7.0]
  def change
    create_table :my_lists do |t|
      t.string :name
      t.string :poster_path
      t.string :backdrop_path
      t.string :release_date
      t.string :overview
      t.integer :vote_average
      t.integer :vote_count
      t.belongs_to :user
      t.timestamps
    end
  end
end
