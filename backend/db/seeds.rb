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
City.create(name: "Oaxaca", language: "es", latitude: 17.06542, longitude: -96.72365)
City.create(name: "Istanbul", language: "tr", latitude: 41.015137, longitude: 28.979530)

# CITY QUIZZES
Quiz.create(name: "Oaxaca Quiz!", city_id: 1)


# CITY QUIZZES

# Oaxaca city quiz questions
Quiz_question.create(question: "How many municipalities are in Oaxaca?", correct_answer: "570", incorrect_answer_1: "55", incorrect_answer_2: "90", incorrect_answer_3: "120", quiz_id: 1)
Quiz_question.create(question: "What is the population of Oaxaca? (choose closest)", correct_answer: "3.5 million", incorrect_answer_1: "2.2 million", incorrect_answer_2: "1.7 million", incorrect_answer_3: "10 million", quiz_id: 1)
Quiz_question.create(question: "Oaxaca is the fifth largest state in Mexico", correct_answer: "True", incorrect_answer_1: "False", incorrect_answer_2: "It is not a state", incorrect_answer_3: "Its size cannot be measured", quiz_id: 1)
Quiz_question.create(question: "What prevented large scale Spanish domination through the colonial era?", correct_answer: "Oaxaca's highly mountainous geography", incorrect_answer_1: "A powerfull army", incorrect_answer_2: "A lack of farming opportunities", incorrect_answer_3: "Too much wildlife.", quiz_id: 1)
Quiz_question.create(question: "What is the largest sector of Oaxaca's economy?", correct_answer: "Agriculture", incorrect_answer_1: "Technology", incorrect_answer_2: "Manufacturing", incorrect_answer_3: "Engineering and construction", quiz_id: 1)
Quiz_question.create(question: "Oaxaca is the nation's second highest producer of:", correct_answer: "Grains and agave", incorrect_answer_1: "peanuts and oranges", incorrect_answer_2: "Mango and sugar cane", incorrect_answer_3: "Alfalfa and almonds", quiz_id: 1)
Quiz_question.create(question: "Where would you find most of the tourist attractions in Oaxaca?", correct_answer: "Valles Centrales", incorrect_answer_1: "La Cañada", incorrect_answer_2: "El Istmo", incorrect_answer_3: "Zipolite", quiz_id: 1)
Quiz_question.create(question: "Puerto Escondido's beach Playa Carrizalillo is famous for attracting international:", correct_answer: "Surfers", incorrect_answer_1: "Snorkelers", incorrect_answer_2: "Sand castle enthusiests", incorrect_answer_3: "Long-distance swimmers", quiz_id: 1)


# LANGUAGE QUIZZES
Quiz.create(name: "How Well Can You Speak Turkish?", city_id: 2)

# LANGUAGE QUIZZES

# Turkish language quiz
Quiz_question.create(question: "How do you say Hello in Turkish?", correct_answer: "Merhaba", incorrect_answer_1: "Nedir", incorrect_answer_2: "Bonjour", incorrect_answer_3: "Haba", quiz_id: 2)
Quiz_question.create(question: "How do you introduce yourself?", correct_answer: "Benim adim [*your name*]", incorrect_answer_1: "Senin adin [*your name*]", incorrect_answer_2: "Benim benim [*your name*]", incorrect_answer_3: "Adin nedir [*your name*]", quiz_id: 2)
Quiz_question.create(question: "How to say “How are you”?", correct_answer: "Nasılsın", incorrect_answer_1: "Nas nas", incorrect_answer_2: "How's it going", incorrect_answer_3: "Teşekkür", quiz_id: 2)
Quiz_question.create(question: "And how do you reply to that same question?", correct_answer: "Ben iyiyim, teşekkür ederim", incorrect_answer_1: "Teşekkür ederim", incorrect_answer_2: "Iyiyim ben", incorrect_answer_3: "Kahve", quiz_id: 2)
Quiz_question.create(question: "How do you ask for help?", correct_answer: "Bana yardım eder misiniz?", incorrect_answer_1: "Yardıma ihtiyacım yok?", incorrect_answer_2: "Benim adim?", incorrect_answer_3: "Bana-bana?", quiz_id: 2)
Quiz_question.create(question: "Can you say: “I'm lost” in Turkish?", correct_answer: "Kayboldum", incorrect_answer_1: "I don't need this, I never get lost", incorrect_answer_2: "Neredeyim", incorrect_answer_3: "Dumbolkay", quiz_id: 2)
Quiz_question.create(question: "How about “thank you”?", correct_answer: "teşekkür ederim", incorrect_answer_1: "Ederim teşekkür ", incorrect_answer_2: "Rica ederim", incorrect_answer_3: "Bilmiyorum", quiz_id: 2)
Quiz_question.create(question: "How do you say “Good-bye”?", correct_answer: "Güle güle", incorrect_answer_1: "Yarın görüşürüz", incorrect_answer_2: "Kötü", incorrect_answer_3: "So long", quiz_id: 2)
