class CreateBills < ActiveRecord::Migration[6.1]
  def change
    create_table :bills do |t|
      t.integer :client_id
      t.string :name_bill
      t.integer :employee_id

      t.timestamps
    end
  end
end
