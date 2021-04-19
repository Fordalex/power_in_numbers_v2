class RemovePlansTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :plans
  end
end
