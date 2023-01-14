User.destroy_all
Avatar.destroy_all

puts "Seeding Avatars 👤"
Avatar.create(name: "Myflix-1", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipP3WjkxDFD8W3XlF-fPRR1bSKX49oYi8G-AZxwz')
Avatar.create(name: "Myflix-2", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipOEEO7HFb_f-0kjZW8Ed_uwv39cy568T_0_JrCZ')
Avatar.create(name: "Myflix-3", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipN3PbmxdCSfcJpkdE70fWRC-tAfZ9RlNsPEJJT7')
Avatar.create(name: "Myflix-4", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipP35RQNXhIDDJ8e7O-mNXYgyVNa0lwOZFQgBI8I')
Avatar.create(name: "Myflix-5", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipOsa79FKkeCDvRpjad69eqPnrkFFeJOCOoBSEbW')
Avatar.create(name: "Myflix-6", imgUrl:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipN9a-baIe4vgLtjsKV1qxes9wGxLynk5XlpZmgl')

puts "Seeding Users 🙂"
liv = User.create(username: "liv", password: "12345678", first_name: "Liv", last_name: "N", profile_img:'https://photos.google.com/album/AF1QipOFvebTIR-CO1uJxIYxkDsi-F3FDUtKlJ7yusEc/photo/AF1QipOEEO7HFb_f-0kjZW8Ed_uwv39cy568T_0_JrCZ')

puts "Done Seeding 🌱"