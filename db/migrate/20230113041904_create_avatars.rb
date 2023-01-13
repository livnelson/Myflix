class CreateAvatars < ActiveRecord::Migration[7.0]
  def change
    create_table :avatars do |t|
      t.string :name
      t.string :imgUrl
      t.timestamps
    end
  end
end
