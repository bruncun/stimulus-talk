class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :completed

      t.timestamps
    end
  end
end
