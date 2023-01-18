class CreateUserAvatars < ActiveRecord::Migration[7.0]
  def change
    create_table :user_avatars do |t|
      t.string :imgUrl
      t.belongs_to :user
      t.belongs_to :user_account
      t.belongs_to :avatar
      t.timestamps
    end
  end
end
