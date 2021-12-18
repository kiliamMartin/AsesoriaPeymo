class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.integer :client_id
      t.string :name_doc

      t.timestamps
    end
  end
end
