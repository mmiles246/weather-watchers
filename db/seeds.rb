# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

location1 = Location.create(city: 'city', state: 'state', zipcode: 'zip')

user1 = User.create(username: 'user1', password_digest: 'test', location_id: location1.id)
