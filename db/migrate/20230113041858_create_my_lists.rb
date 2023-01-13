class CreateMyLists < ActiveRecord::Migration[7.0]
  def change
    create_table :my_lists do |t|

      t.timestamps
    end
  end
end
