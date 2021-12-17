class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :surname, null: false
      t.integer :phone, null: false
      t.string :nameCompany
      t.string :address
      t.string :email, null:false
      t.string :password, null: false
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
    add_index :users, :email, unique:true
  end
end
