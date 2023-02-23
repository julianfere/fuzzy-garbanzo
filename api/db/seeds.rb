require 'faker'

User.create(name: "Admin", email: "fere@fere.com", password: "123456", role: 1)
User.create(name: "Commoner", email: "fere@c.com", password: "123456")

42.times do
  User.create(
    name: Faker::Name::name,
    email: Faker::Internet::email,
    password: "123456"
  )
end

User.first(2).each do |user|
  3.times do
    user.students.create(
      name: Faker::Name::first_name,
      lastname: Faker::Name::last_name,
      birthdate: Faker::Date::between(from: '2000-01-01', to: '2015-01-01'),
      school_grade: rand(0..3),
      active_student: true
    )
  end
end
