class CreateUserAvatars < ActiveRecord::Migration[7.0]
  def change
    create_table :user_avatars do |t|

      t.timestamps
    end
  end
end
