class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :state
      t.string :zipcode

      t.timestamps
    end
  end
end
