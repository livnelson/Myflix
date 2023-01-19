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
liv = Account.create(username: "liv", password: "P4$$W0rd!")
em = Account.create(username: "emily", password: "P4$$W0rd!")

puts "Seeding Users 👨‍👩‍👧‍👦"
olivia = User.create(username: "Liv", password: "P4$$W0rd!", first_name: "Liv", last_name: "N", profile_img: a2.imgUrl)
luke = User.create(username: "Luke", password: "P4$$W0rd!", first_name: "Luke", last_name: "W", profile_img: a5.imgUrl)
emma = User.create(username: "Emma", password: "P4$$W0rd!", first_name: "Emma", last_name: "N", profile_img: a4.imgUrl)
haley = User.create(username: "Haley", password: "P4$$W0rd!", first_name: "Haley", last_name: "N", profile_img: a6.imgUrl)
emily = User.create(username: "Emily", password: "P4$$W0rd!", first_name: "Emily", last_name: "P", profile_img: a1.imgUrl)
simon = User.create(username: "Simon", password: "P4$$W0rd!", first_name: "Simon", last_name: "P", profile_img: a5.imgUrl)
penny = User.create(username: "Penny", password: "P4$$W0rd!", first_name: "Penny", last_name: "P", profile_img: a3.imgUrl)
cooper = User.create(username: "Cooper", password: "P4$$W0rd!", first_name: "Cooper", last_name: "P", profile_img: a6.imgUrl)

puts "Done Seeding 🌱"