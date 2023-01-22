Avatar.destroy_all
User.destroy_all
Person.destroy_all

puts "Seeding Avatars ✨"
a1 = Avatar.create(name: "Myflix-1", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-1.jpg')
a2 = Avatar.create(name: "Myflix-2", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-2.jpg')
a3 = Avatar.create(name: "Myflix-3", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-3.jpg')
a4 = Avatar.create(name: "Myflix-4", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-4.jpg')
a5 = Avatar.create(name: "Myflix-5", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-5.jpg')
a6 = Avatar.create(name: "Myflix-6", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-6.jpg')
a7 = Avatar.create(name: "Myflix-7", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-7.jpg')
a8 = Avatar.create(name: "Myflix-8", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-8.jpg')
a9 = Avatar.create(name: "Myflix-9", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-9.jpg')
a10 = Avatar.create(name: "Myflix-10", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-10.jpg')
a11 = Avatar.create(name: "Myflix-11", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-11.jpg')
a12 = Avatar.create(name: "Myflix-12", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-12.jpg')
a13 = Avatar.create(name: "Myflix-13", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-13.jpg')
a14 = Avatar.create(name: "Myflix-14", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-14.jpg')
a15 = Avatar.create(name: "Myflix-15", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-15.jpg')
a16 = Avatar.create(name: "Myflix-16", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-16.jpg')
a17 = Avatar.create(name: "Myflix-17", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-17.jpg')
a18 = Avatar.create(name: "Myflix-18", imgUrl: 'https://liv-creative.com/wp-content/uploads/2023/01/myflix-18.jpg')

puts "Seeding Users 👩👨"
liv = User.create(username: "Liv", password: "P4$$W0rd!", first_name: "Liv", last_name: "N", profile_img: a2.imgUrl)
em = User.create(username: "Emily", password: "P4$$W0rd!", first_name: "Emily", last_name: "P", profile_img: a1.imgUrl)

puts "Seeding People 👨‍👩‍👧‍👦"
olivia = Person.create(username: "Me", first_name: "Olivia", last_name: "N", profile_img: a2.imgUrl, user_id: liv.id)
luke = Person.create(username: "Luke", first_name: "Luke", last_name: "W", profile_img: a5.imgUrl, user_id: liv.id)
emma = Person.create(username: "Emma", first_name: "Emma", last_name: "N", profile_img: a4.imgUrl, user_id: liv.id)
haley = Person.create(username: "Haley", first_name: "Haley", last_name: "N", profile_img: a6.imgUrl, user_id: liv.id)
emily = Person.create(username: "Em", first_name: "Emily", last_name: "P", profile_img: a1.imgUrl, user_id: em.id)
simon = Person.create(username: "Simon", first_name: "Simon", last_name: "P", profile_img: a5.imgUrl, user_id: em.id)
penny = Person.create(username: "Penny", first_name: "Penny", last_name: "P", profile_img: a3.imgUrl, user_id: em.id)
cooper = Person.create(username: "Cooper", first_name: "Cooper", last_name: "P", profile_img: a6.imgUrl, user_id: em.id)

puts "Done Seeding 🌱"