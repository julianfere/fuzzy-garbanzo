class CreateStudentsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string 'name', null: false
      t.string 'lastname', null: false
      t.date 'birthdate', null: false
      t.string 'address'
      t.integer 'school_grade', default: 0
      t.boolean 'active_student', default: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
