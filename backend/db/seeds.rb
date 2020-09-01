# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TEST
Experience.create(name: "Best Experience Eva!")

# CITIES
City.create(name: "Oaxaca", language: "es", latitude: 17.06544, longitude: -96.74365)
City.create(name: "Istanbul", language: "tr", latitude: 41.015137, longitude: 48.979530)
City.create(name: ‘Ho Chi Minh City (Saigon)’, language: ‘vi’, longitude: 10.762622, longitude: 106.660172)

# CITY QUIZZES
Quiz.create(name: "Oaxaca Quiz!", city_id: 1) # quiz.id: 1
Quiz.create(name: "How Well Do You Know Istanbul?", city_id: 2) # quiz.id: 4


# CITY QUIZZES

# Oaxaca city quiz questions
Quiz_question.create(question: "How many municipalities are in Oaxaca?", correct_answer: "570", incorrect_answer_1: "55", incorrect_answer_4: "90", incorrect_answer_3: "140", quiz_id: 1)
Quiz_question.create(question: "What is the population of Oaxaca? (choose closest)", correct_answer: "3.5 million", incorrect_answer_1: "4.4 million", incorrect_answer_4: "1.7 million", incorrect_answer_3: "10 million", quiz_id: 1)
Quiz_question.create(question: "Oaxaca is the fifth largest state in Mexico", correct_answer: "True", incorrect_answer_1: "False", incorrect_answer_4: "It is not a state", incorrect_answer_3: "Its size cannot be measured", quiz_id: 1)
Quiz_question.create(question: "What prevented large scale Spanish domination through the colonial era?", correct_answer: "Oaxaca's highly mountainous geography", incorrect_answer_1: "A powerfull army", incorrect_answer_4: "A lack of farming opportunities", incorrect_answer_3: "Too much wildlife.", quiz_id: 1)
Quiz_question.create(question: "What is the largest sector of Oaxaca's economy?", correct_answer: "Agriculture", incorrect_answer_1: "Technology", incorrect_answer_4: "Manufacturing", incorrect_answer_3: "Engineering and construction", quiz_id: 1)
Quiz_question.create(question: "Oaxaca is the nation's second highest producer of:", correct_answer: "Grains and agave", incorrect_answer_1: "peanuts and oranges", incorrect_answer_4: "Mango and sugar cane", incorrect_answer_3: "Alfalfa and almonds", quiz_id: 1)
Quiz_question.create(question: "Where would you find most of the tourist attractions in Oaxaca?", correct_answer: "Valles Centrales", incorrect_answer_1: "La Cañada", incorrect_answer_4: "El Istmo", incorrect_answer_3: "Zipolite", quiz_id: 1)
Quiz_question.create(question: "Puerto Escondido's beach Playa Carrizalillo is famous for attracting international:", correct_answer: "Surfers", incorrect_answer_1: "Snorkelers", incorrect_answer_4: "Sand castle enthusiests", incorrect_answer_3: "Long-distance swimmers", quiz_id: 1)

Quiz_question.create(question: ‘What is a former name of Istabul?’, correct_answer: ‘Constantinople’, incorrect_answer_1: ‘Constantine Ville’, incorrect_answer_4: ‘Ankara’, incorrect_answer_3: ‘Byzantine’, quiz_id: 2 )
Quiz_question.create(question: ‘“The Sunken Palace” is the Turkish name for _______?’, correct_answer: ‘Basilica Cisterns’, incorrect_answer_1: ‘The Blue Mosque’, incorrect_answer_4: ‘Grand Market’, incorrect_answer_3: ‘Hagia Sophia’, quiz_id: 2)
Quiz_question.create(question: ‘There is a statue of this animal in Istanbul:’, correct_answer: ‘Cat’, incorrect_answer_1: ‘Squirrel’, incorrect_answer_4: ‘Dog’, incorrect_answer_3: ‘Pigeon’, quiz_id: 2)
Quiz_question.create(question: ‘What happened to the statue of Tombili a month after installation?’, correct_answer: ‘It was stolen’, incorrect_answer_1: ‘It was vandalized’, incorrect_answer_4: ‘Someone put a hat on it’, incorrect_answer_3: ‘Nothing happened, this is a trick question!’, quiz_id: 2)
Quiz_question.create(question: ‘What is the color of a famous mosque in Istanbul?’, correct_answer: ‘Blue’, incorrect_answer_1: ‘Pink, incorrect_answer_4: ‘Yellow’, incorrect_answer_3: ‘Pink’, quiz_id: 2)
Quiz_question.create(question: ‘“Kapalıçarşı” in Turkish means:’, correct_answer: ‘Covered Market’, incorrect_answer_1: ‘Big Market’, incorrect_answer_4: ‘The Blue Mosque’, incorrect_answer_3: ‘Turkish Market’, quiz_id: 2)
Quiz_question.create(question: ‘The Grand Bazaar at Istanbul is often regarded as one of the first ________ of the world’, correct_answer: ‘Shopping malls’, incorrect_answer_1: ‘Coffee shops’, incorrect_answer_4: ‘Banks’, incorrect_answer_3: ‘Shoe stores’, quiz_id: 2)
Quiz_question.create(question: ‘What is involved in making a traditional cup of Turkish coffee?’, correct_answer: ‘Sand’, incorrect_answer_1: ‘Sea water’, incorrect_answer_4: ‘Hot stones’, incorrect_answer_3: ‘Beans grown in Turkey, duh’, quiz_id: 2)


# LANGUAGE QUIZZES
Quiz.create(name: "How Well Can You Speak Turkish?", city_id: 2) # quiz.id: 4
Quiz.create(name: ‘How Well Can You Speak Vietnamese?’, city_id: 3) #quiz.id: 5

# LANGUAGE QUIZZES

# Turkish language quiz
Quiz_question.create(question: "How do you say Hello in Turkish?", correct_answer: "Merhaba", incorrect_answer_1: "Nedir", incorrect_answer_4: "Bonjour", incorrect_answer_3: "Haba", quiz_id: 4)
Quiz_question.create(question: "How do you introduce yourself?", correct_answer: "Benim adim [*your name*]", incorrect_answer_1: "Senin adin [*your name*]", incorrect_answer_4: "Benim benim [*your name*]", incorrect_answer_3: "Adin nedir [*your name*]", quiz_id: 4)
Quiz_question.create(question: "How to say “How are you”?", correct_answer: "Nasılsın", incorrect_answer_1: "Nas nas", incorrect_answer_4: "How's it going", incorrect_answer_3: "Teşekkür", quiz_id: 4)
Quiz_question.create(question: "And how do you reply to that same question?", correct_answer: "Ben iyiyim, teşekkür ederim", incorrect_answer_1: "Teşekkür ederim", incorrect_answer_4: "Iyiyim ben", incorrect_answer_3: "Kahve", quiz_id: 4)
Quiz_question.create(question: "How do you ask for help?", correct_answer: "Bana yardım eder misiniz?", incorrect_answer_1: "Yardıma ihtiyacım yok?", incorrect_answer_4: "Benim adim?", incorrect_answer_3: "Bana-bana?", quiz_id: 4)
Quiz_question.create(question: "Can you say: “I'm lost” in Turkish?", correct_answer: "Kayboldum", incorrect_answer_1: "I don't need this, I never get lost", incorrect_answer_4: "Neredeyim", incorrect_answer_3: "Dumbolkay", quiz_id: 4)
Quiz_question.create(question: "How about “thank you”?", correct_answer: "teşekkür ederim", incorrect_answer_1: "Ederim teşekkür ", incorrect_answer_4: "Rica ederim", incorrect_answer_3: "Bilmiyorum", quiz_id: 4)
Quiz_question.create(question: "How do you say “Good-bye”?", correct_answer: "Güle güle", incorrect_answer_1: "Yarın görüşürüz", incorrect_answer_4: "Kötü", incorrect_answer_3: "So long", quiz_id: 4)

Quiz_question.create(question: ‘How do you say “Hello” in Vietnamese?’, correct_answer: ‘Xin chào’, incorrect_answer_1: ‘Ciao’, incorrect_answer_2: ‘Chào-chào’, incorrect_answer_3: ‘Tạm biệt’, quiz_id: ???)
Quiz_question.create(question: ‘How can you ask “How are you”?’, correct_answer: ‘Bạn khỏe không’, incorrect_answer_1: ‘Bạn khỏe thong’, incorrect_answer_2: ‘Không’, incorrect_answer_3: ‘Bạn bao nhiêu tuổi’, quiz_id: ???)
Quiz_question.create(question: ‘What is the Vietnamese for “Help”?’, correct_answer: ‘’, incorrect_answer_1: ‘’, incorrect_answer_2: ‘’, incorrect_answer_3: ‘’, quiz_id: ???)
Quiz_question.create(question: ‘How do you inquire about the price?’, correct_answer: ‘Bao nhiêu’, incorrect_answer_1: ‘Củ Chi’, incorrect_answer_2: ‘Vé’, incorrect_answer_3: ‘Bao’, quiz_id: ???)
Quiz_question.create(question: ‘How do you say “Please”?’, correct_answer: ‘Xin vui lòng’, incorrect_answer_1: ‘Tôi khỏe’, incorrect_answer_2: ‘Cảm ơn bạn’, incorrect_answer_3: ‘Lòng’, quiz_id: ???)
Quiz_question.create(question: ‘Can you say “Thank you”?’, correct_answer: ‘Cảm ơn bạn’, incorrect_answer_1: ‘Tạm biệt’, incorrect_answer_2: ‘Không có gì’, incorrect_answer_3: ‘Dự án này thật tuyệt’, quiz_id: ???)
Quiz_question.create(question: ‘How do you say “Have a nice day” in Vietnamese?’, correct_answer: ‘Chúc một ngày tốt lành.’, incorrect_answer_1: ‘Hẹn gặp bạn vào ngày mai’, incorrect_answer_2: ‘Bạn khỏe không’, incorrect_answer_3: ‘Xin chào’, quiz_id: ???)
Quiz_question.create(question: ‘What about “Good-bye”?’, correct_answer: ‘Tạm biệt’, incorrect_answer_1: ‘Buổi sáng tốt lành’, incorrect_answer_2: ‘Vui mừng’, incorrect_answer_3: ‘Cho tôi xin hai vé’, quiz_id: ???)
    
    