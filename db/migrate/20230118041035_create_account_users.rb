class CreateAccountUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :account_users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :profile_img
      t.belongs_to :user
      t.timestamps
    end
  end
end
