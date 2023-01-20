Avatar.destroy_all
User.destroy_all
Person.destroy_all

puts "Seeding Avatars ✨"
a1 = Avatar.create(name: "Myflix-1", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-1.jpg')
a2 = Avatar.create(name: "Myflix-2", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-2.jpg')
a3 = Avatar.create(name: "Myflix-3", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-3.jpg')
a4 = Avatar.create(name: "Myflix-4", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-4.jpg')
a5 = Avatar.create(name: "Myflix-5", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-5.jpg')
a6 = Avatar.create(name: "Myflix-6", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-6.jpg')

puts "Seeding Users 👩👨"
liv = User.create(username: "Liv", password: "P4$$W0rd!", first_name: "Liv", last_name: "N", profile_img: a2.imgUrl)
em = User.create(username: "Emily", password: "P4$$W0rd!", first_name: "Emily", last_name: "P", profile_img: a1.imgUrl)

puts "Seeding People 👨‍👩‍👧‍👦"
luke = Person.create(username: "Luke", first_name: "Luke", last_name: "W", profile_img: a5.imgUrl, user_id: liv.id)
emma = Person.create(username: "Emma", first_name: "Emma", last_name: "N", profile_img: a4.imgUrl, user_id: liv.id)
haley = Person.create(username: "Haley", first_name: "Haley", last_name: "N", profile_img: a6.imgUrl, user_id: liv.id)
simon = Person.create(username: "Simon", first_name: "Simon", last_name: "P", profile_img: a5.imgUrl, user_id: em.id)
penny = Person.create(username: "Penny", first_name: "Penny", last_name: "P", profile_img: a3.imgUrl, user_id: em.id)
cooper = Person.create(username: "Cooper", first_name: "Cooper", last_name: "P", profile_img: a6.imgUrl, user_id: em.id)

puts "Done Seeding 🌱"