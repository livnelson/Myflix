Account.destroy_all
User.destroy_all
Avatar.destroy_all

puts "Seeding Avatars ✨"
a1 = Avatar.create(name: "Myflix-1", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-1.jpg')
a2 = Avatar.create(name: "Myflix-2", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-2.jpg')
a3 = Avatar.create(name: "Myflix-3", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-3.jpg')
a4 = Avatar.create(name: "Myflix-4", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-4.jpg')
a5 = Avatar.create(name: "Myflix-5", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-5.jpg')
a6 = Avatar.create(name: "Myflix-6", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-6.jpg')

puts "Seeding Account 💲"
liv = Account.create(username: "liv", password: "12345678")

puts "Seeding Users 👨‍👩‍👧‍👦"
liv = User.create(username: "liv", first_name: "Liv", last_name: "N", profile_img: a2.imgUrl, account_id: liv.id)
luke = User.create(username: "luke", first_name: "Luke", last_name: "W", profile_img: a5.imgUrl, account_id: liv.id)
emma = User.create(username: "emma", first_name: "Emma", last_name: "N", profile_img: a4.imgUrl, account_id: liv.id)
haley = User.create(username: "haley", first_name: "Haley", last_name: "N", profile_img: a6.imgUrl, account_id: liv.id)

puts "Done Seeding 🌱"