class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :profile_img
      t.belongs_to :account
      t.timestamps
    end
  end
end