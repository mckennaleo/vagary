# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS
User.create(name: "test Name", email: "test@test.com", password: "123456789")
User.create(name: "John Smith", email: "test2@test.com", password: "123456789")
User.create(name: "alyssa", email: "apple@core.com", password: "password")

# CITIES
City.create(name: "Oaxaca", language: "es", latitude: 17.06544, longitude: -96.74365, playlist: "spotify:playlist:50cAhfdSSu1CQZpWMMZyw5")
City.create(name: "Istanbul", language: "tr", latitude: 41.015137, longitude: 48.979530, playlist: "spotify:playlist:7qiesZR3pwTVGGqV4lVxQu")
City.create(name: "Saigon", language: "vi", latitude: 10.762622, longitude: 106.660172, playlist: "spotify:playlist:4pkof2WT0Spca1pX3j2dh4?si=gsmRtNJLSlycwVsT18p3dw")


# PHRASE TRANSLATIONS

# Turkish phrase translation
Translation.create(phrase: "Merhaba adın nedir?", city_id: 2)
Translation.create(phrase: "Merhaba, benim adım Ata.", city_id: 2)
Translation.create(phrase: "Nasılsın?", city_id: 2)
Translation.create(phrase: "Ben iyiyim teşekkür ederim.", city_id: 2)
Translation.create(phrase: "Bana yardım eder misiniz? Kayboldum.", city_id: 2)
Translation.create(phrase: "Elbette!", city_id: 2)
Translation.create(phrase: "Ayasofya'ya nasıl gidebilirim?", city_id: 2)
Translation.create(phrase: "Karşıdan karşıya geçerken sola dönün. Sultanahmet Camii'nin karşısında.", city_id: 2)
Translation.create(phrase: "Teşekkür ederim! Güle güle!", city_id: 2)
Translation.create(phrase: "Rica ederim. İyi günler!", city_id: 2)

# Ho Chi Minh City (Saigon) phrase translation
Translation.create(phrase: "Xin chào, bạn khỏe không?", city_id: 3)
Translation.create(phrase: "Xin chào, tôi khỏe, cảm ơn!", city_id: 3)
Translation.create(phrase: "Làm thế nào để tôi giúp bạn?", city_id: 3)
Translation.create(phrase: "Vé tham quan địa đạo Củ Chi bao nhiêu?", city_id: 3)
Translation.create(phrase: "Vé vào cửa là 90.000đ.", city_id: 3)
Translation.create(phrase: "Cho tôi xin hai vé.", city_id: 3)
Translation.create(phrase: "Của bạn đây. Bạn thanh toán hôm nay như thế nào?", city_id: 3)
Translation.create(phrase: "Tiền mặt, xin vui lòng.", city_id: 3)
Translation.create(phrase: "Cảm ơn bạn. Tạm biệt!", city_id: 3)
Translation.create(phrase: "Chúc một ngày tốt lành.", city_id: 3)

# EXPERIENCE QUIZZES
Quiz.create(name: "Oaxaca Quiz!", city_id: 1) # quiz.id: 1
Quiz.create(name: "How Well Do You Know Istanbul?", city_id: 2) # quiz.id: 2
Quiz.create(name: "How Well Do You Know Saigon?", city_id: 3) # quiz.id: 3


# EXPERIENCE QUIZZES QUESTIONS

# Oaxaca city quiz questions
QuizQuestion.create(question: "How many municipalities are in Oaxaca?", correct_answer: "570", incorrect_answer_1: "55", incorrect_answer_2: "90", incorrect_answer_3: "140", quiz_id: 1)
QuizQuestion.create(question: "What is the population of Oaxaca? (choose closest)", correct_answer: "3.5 million", incorrect_answer_1: "4.4 million", incorrect_answer_2: "1.7 million", incorrect_answer_3: "10 million", quiz_id: 1)
QuizQuestion.create(question: "Oaxaca is the fifth largest state in Mexico", correct_answer: "True", incorrect_answer_1: "False", incorrect_answer_2: "It is not a state", incorrect_answer_3: "Its size cannot be measured", quiz_id: 1)
QuizQuestion.create(question: "What prevented large scale Spanish domination through the colonial era?", correct_answer: "Oaxaca's highly mountainous geography", incorrect_answer_1: "A powerfull army", incorrect_answer_2: "A lack of farming opportunities", incorrect_answer_3: "Too much wildlife.", quiz_id: 1)
QuizQuestion.create(question: "What is the largest sector of Oaxaca's economy?", correct_answer: "Agriculture", incorrect_answer_1: "Technology", incorrect_answer_2: "Manufacturing", incorrect_answer_3: "Engineering and construction", quiz_id: 1)
QuizQuestion.create(question: "Oaxaca is the nation's second highest producer of:", correct_answer: "Grains and agave", incorrect_answer_1: "peanuts and oranges", incorrect_answer_2: "Mango and sugar cane", incorrect_answer_3: "Alfalfa and almonds", quiz_id: 1)
QuizQuestion.create(question: "Where would you find most of the tourist attractions in Oaxaca?", correct_answer: "Valles Centrales", incorrect_answer_1: "La Cañada", incorrect_answer_2: "El Istmo", incorrect_answer_3: "Zipolite", quiz_id: 1)
QuizQuestion.create(question: "Puerto Escondido's beach Playa Carrizalillo is famous for attracting international:", correct_answer: "Surfers", incorrect_answer_1: "Snorkelers", incorrect_answer_2: "Sand castle enthusiests", incorrect_answer_3: "Long-distance swimmers", quiz_id: 1)

QuizQuestion.create(question: "What is a former name of Istabul?", correct_answer: "Constantinople", incorrect_answer_1: "Constantine Ville", incorrect_answer_2: "Ankara", incorrect_answer_3: "Byzantine", quiz_id: 2 )
QuizQuestion.create(question: "'The Sunken Palace' is the Turkish name for _______?", correct_answer: "Basilica Cisterns", incorrect_answer_1: "The Blue Mosque", incorrect_answer_2: "Grand Market", incorrect_answer_3: "Hagia Sophia", quiz_id: 2)
QuizQuestion.create(question: "There is a statue of this animal in Istanbul:", correct_answer: "Cat", incorrect_answer_1: "Squirrel", incorrect_answer_2: "Dog", incorrect_answer_3: "Pigeon", quiz_id: 2)
QuizQuestion.create(question: "What happened to the statue of Tombili a month after installation?", correct_answer: "It was stolen", incorrect_answer_1: "It was vandalized", incorrect_answer_2: "Someone put a hat on it", incorrect_answer_3: "Nothing happened, this is a trick question!", quiz_id: 2)
QuizQuestion.create(question: "What is the color of a famous mosque in Istanbul?", correct_answer: "Blue", incorrect_answer_1: "Pink", incorrect_answer_2: "Yellow", incorrect_answer_3: "Pink", quiz_id: 2)
QuizQuestion.create(question: "'Kapalıçarşı' in Turkish means:", correct_answer: "Covered Market", incorrect_answer_1: "Big Market", incorrect_answer_2: "The Blue Mosque", incorrect_answer_3: "Turkish Market", quiz_id: 2)
QuizQuestion.create(question: "The Grand Bazaar at Istanbul is often regarded as one of the first ________ of the world", correct_answer: "Shopping malls", incorrect_answer_1: "Coffee shops", incorrect_answer_2: "Banks", incorrect_answer_3: "Shoe stores", quiz_id: 2)
QuizQuestion.create(question: "What is involved in making a traditional cup of Turkish coffee?", correct_answer: "Sand", incorrect_answer_1: "Sea water", incorrect_answer_2: "Hot stones", incorrect_answer_3: "Beans grown in Turkey, duh", quiz_id: 2)

QuizQuestion.create(question: "The apartment block at 42 Nguyen Hue is now full of _______", correct_answer: "Coffee shops", incorrect_answer_1: "Jewellery stalls", incorrect_answer_2: "Galleries", incorrect_answer_3: "Daycare centres", quiz_id: 3)
QuizQuestion.create(question: "Thien Hau Temple was built by _________", correct_answer: "Cantonese immigrants", incorrect_answer_1: "Construction workers, of course!", incorrect_answer_2: "Thai immigrants", incorrect_answer_3: "Architecture buffs", quiz_id: 3)
QuizQuestion.create(question: "Who is Thien Hau?", correct_answer: "The goddess of the sea", incorrect_answer_1: "The goddess of war", incorrect_answer_2: "The goddess of love and peace", incorrect_answer_3: "Vietnam's first lady", quiz_id: 3)
QuizQuestion.create(question: "During which tragic period in Vietnam's history were Cu Chi Tunnels created?", correct_answer: "The Vietnam War", incorrect_answer_1: "World War II", incorrect_answer_2: "World War I", incorrect_answer_3: "American Civil War", quiz_id: 3)
QuizQuestion.create(question: "Where can you find mangrove forest near Saigon?", correct_answer: "Monkey Island", incorrect_answer_1: "Hanoi", incorrect_answer_2: "Ho Chi Minh City", incorrect_answer_3: "Crocodile Island", quiz_id: 3)
QuizQuestion.create(question: "What animals besides monkeys can be found on the Monkey Island?", correct_answer: "Crocodiles", incorrect_answer_1: "Tigers", incorrect_answer_2: "Flamingoes", incorrect_answer_3: "Cats", quiz_id: 3)
QuizQuestion.create(question: "What attraction is located in the middle of Saigon?", correct_answer: "Ben Thanh Market", incorrect_answer_1: "Cu Chi tunnels", incorrect_answer_2: "Thien Hau Temple", incorrect_answer_3: "Ha Long Bay", quiz_id: 3)
QuizQuestion.create(question: "Ben Thanh Market welcomes more than _________ visitors per day", correct_answer: "10,000", incorrect_answer_1: "1,000,000", incorrect_answer_2: "500,000", incorrect_answer_3: "2,500", quiz_id: 3)



# LANGUAGE QUIZZES
Quiz.create(name: "How Well Can You Speak Turkish?", city_id: 2) # quiz.id: 4
Quiz.create(name: "How Well Can You Speak Vietnamese?", city_id: 3) #quiz.id: 5

# LANGUAGE QUIZZES QUESTIONS

# Turkish language quiz
QuizQuestion.create(question: "How do you say Hello in Turkish?", correct_answer: "Merhaba", incorrect_answer_1: "Nedir", incorrect_answer_2: "Bonjour", incorrect_answer_3: "Haba", quiz_id: 4)
QuizQuestion.create(question: "How do you introduce yourself?", correct_answer: "Benim adim [*your name*]", incorrect_answer_1: "Senin adin [*your name*]", incorrect_answer_2: "Benim benim [*your name*]", incorrect_answer_3: "Adin nedir [*your name*]", quiz_id: 4)
QuizQuestion.create(question: "How to say “How are you”?", correct_answer: "Nasılsın", incorrect_answer_1: "Nas nas", incorrect_answer_2: "How's it going", incorrect_answer_3: "Teşekkür", quiz_id: 4)
QuizQuestion.create(question: "And how do you reply to that same question?", correct_answer: "Ben iyiyim, teşekkür ederim", incorrect_answer_1: "Teşekkür ederim", incorrect_answer_2: "Iyiyim ben", incorrect_answer_3: "Kahve", quiz_id: 4)
QuizQuestion.create(question: "How do you ask for help?", correct_answer: "Bana yardım eder misiniz?", incorrect_answer_1: "Yardıma ihtiyacım yok?", incorrect_answer_2: "Benim adim?", incorrect_answer_3: "Bana-bana?", quiz_id: 4)
QuizQuestion.create(question: "Can you say: “I'm lost” in Turkish?", correct_answer: "Kayboldum", incorrect_answer_1: "I don't need this, I never get lost", incorrect_answer_2: "Neredeyim", incorrect_answer_3: "Dumbolkay", quiz_id: 4)
QuizQuestion.create(question: "How about “thank you”?", correct_answer: "teşekkür ederim", incorrect_answer_1: "Ederim teşekkür ", incorrect_answer_2: "Rica ederim", incorrect_answer_3: "Bilmiyorum", quiz_id: 4)
QuizQuestion.create(question: "How do you say “Good-bye”?", correct_answer: "Güle güle", incorrect_answer_1: "Yarın görüşürüz", incorrect_answer_2: "Kötü", incorrect_answer_3: "So long", quiz_id: 4)

QuizQuestion.create(question: "How do you say “Hello” in Vietnamese?", correct_answer: "Xin chào", incorrect_answer_1: "Ciao", incorrect_answer_2: "Chào-chào", incorrect_answer_3: "Tạm biệt", quiz_id: 5)
QuizQuestion.create(question: "How can you ask “How are you”?", correct_answer: "Bạn khỏe không", incorrect_answer_1: "Bạn khỏe thong", incorrect_answer_2: "Không", incorrect_answer_3: "Bạn bao nhiêu tuổi", quiz_id: 5)
QuizQuestion.create(question: "What is the Vietnamese for “Help”?", correct_answer: "", incorrect_answer_1: "", incorrect_answer_2: "", incorrect_answer_3: "", quiz_id: 5)
QuizQuestion.create(question: "How do you inquire about the price?", correct_answer: "Bao nhiêu", incorrect_answer_1: "Củ Chi", incorrect_answer_2: "Vé", incorrect_answer_3: "Bao", quiz_id: 5)
QuizQuestion.create(question: "How do you say “Please”?", correct_answer: "Xin vui lòng", incorrect_answer_1: "Tôi khỏe", incorrect_answer_2: "Cảm ơn bạn", incorrect_answer_3: "Lòng", quiz_id: 5)
QuizQuestion.create(question: "Can you say “Thank you”?", correct_answer: "Cảm ơn bạn", incorrect_answer_1: "Tạm biệt", incorrect_answer_2: "Không có gì", incorrect_answer_3: "Dự án này thật tuyệt", quiz_id: 5)
QuizQuestion.create(question: "How do you say “Have a nice day” in Vietnamese?", correct_answer: "Chúc một ngày tốt lành.", incorrect_answer_1: "Hẹn gặp bạn vào ngày mai", incorrect_answer_2: "Bạn khỏe không", incorrect_answer_3: "Xin chào", quiz_id: 5)
QuizQuestion.create(question: "What about “Good-bye”?", correct_answer: "Tạm biệt", incorrect_answer_1: "Buổi sáng tốt lành", incorrect_answer_2: "Vui mừng", incorrect_answer_3: "Cho tôi xin hai vé", quiz_id: 5)    
QuizQuestion.create(question: "What about “Good-bye”?", correct_answer: "Tạm biệt", incorrect_answer_1: "Buổi sáng tốt lành", incorrect_answer_2: "Vui mừng", incorrect_answer_3: "Cho tôi xin hai vé", quiz_id: 5)

# QUIZ RESULTS
QuizResult.create(result: 75, quiz_id: 5, user_id: 1)
QuizResult.create(result: 12.5, quiz_id: 4, user_id: 1)
QuizResult.create(result: 25, quiz_id: 4, user_id: 2)
