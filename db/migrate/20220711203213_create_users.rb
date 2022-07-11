class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
