User.destroy_all
Avatar.destroy_all

puts "Seeding Avatars 👤"
a1 = Avatar.create(name: "Myflix-1", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-1.jpg')
a2 = Avatar.create(name: "Myflix-2", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-2.jpg')
a3 = Avatar.create(name: "Myflix-3", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-3.jpg')
a4 = Avatar.create(name: "Myflix-4", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-4.jpg')
a5 = Avatar.create(name: "Myflix-5", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-5.jpg')
a6 = Avatar.create(name: "Myflix-6", imgUrl:'https://liv-creative.com/wp-content/uploads/2023/01/myflix-6.jpg')

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", profile_img: a2.imgUrl)

puts "Done Seeding 🌱"