# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb

# Clear existing data
Hero.destroy_all
Role.destroy_all

# Create roles
roles = {
  "Strategist" => Role.create!(name: "Strategist"),
  "Duelist"    => Role.create!(name: "Duelist"),
  "Vanguard"   => Role.create!(name: "Vanguard")
}

# List of heroes with their roles
heroes = [
  ["Adam Warlock", "Strategist"],
  ["Black Panther", "Duelist"],
  ["Black Widow", "Duelist"],
  ["Bruce Banner", "Vanguard"],
  ["Captian America", "Vanguard"],
  ["CLoack & Dagger", "Strategist"],
  ["Doctor Stranger", "Vanguard"],
  ["Emma Frost", "Vanguard"],
  ["Groot", "Vanguard"],
  ["Hawkeye", "Duelist"],
  ["Hela", "Duelist"],
  ["Human Torch", "Duelist"],
  ["Invisible Woman", "Strategist"],
  ["Iron Fist", "Duelist"],
  ["Iron Man", "Duelist"],
  ["Jeff the Land Shark", "Strategist"],
  ["Loki", "Strategist"],
  ["Luna Snow", "Strategist"],
  ["Magik", "Duelist"],
  ["Magneto", "Vanguard"],
  ["Mantis", "Strategist"],
  ["Mister Fantastic", "Duelist"],
  ["Moon Knight", "Duelist"],
  ["Namor", "Duelist"],
  ["Peni Parker", "Vanguard"],
  ["Psylocke", "Duelist"],
  ["Rocket Raccoon", "Strategist"],
  ["Scarlet Witch", "Duelist"],
  ["Spider-man", "Duelist"],
  ["Squirrel Girl", "Duelist"],
  ["Star-lord", "Duelist"],
  ["Storm", "Duelist"],
  ["The Punisher", "Duelist"],
  ["The Thing", "Vanguard"],
  ["Thor", "Vanguard"],
  ["Venom", "Vanguard"],
  ["Winter Soldier", "Duelist"],
  ["Wolverine", "Duelist"]
]

# Create heroes
heroes.each do |name, role_name|
  Hero.create!(name: name, role: roles[role_name])
end

puts "Seeded #{Role.count} roles and #{Hero.count} heroes."
