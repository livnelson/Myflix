User.destroy_all
Avatar.destroy_all

puts "Seeding Avatars 👤"
Avatar.create(name: "Myflix-1", imgUrl:'%PUBLIC_URL%/avatars/myflix-1.jpg')
Avatar.create(name: "Myflix-2", imgUrl:'%PUBLIC_URL%/avatars/myflix-2.jpg')
Avatar.create(name: "Myflix-3", imgUrl:'%PUBLIC_URL%/avatars/myflix-3.jpg')
Avatar.create(name: "Myflix-4", imgUrl:'%PUBLIC_URL%/avatars/myflix-4.jpg')
Avatar.create(name: "Myflix-5", imgUrl:'%PUBLIC_URL%/avatars/myflix-5.jpg')
Avatar.create(name: "Myflix-6", imgUrl:'%PUBLIC_URL%/avatars/myflix-6.jpg')

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", profile_img:'%PUBLIC_URL%/avatars/myflix-2.jpg')

puts "Done Seeding 🌱"