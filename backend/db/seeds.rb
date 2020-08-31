# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TEST
Experience.create(name: "Best Experience Eva!")

City.create(name: "Oaxaca", language: "es", coordinates: [])
# 17.0732° N, 96.7266° W

Quiz.create(name: “Oaxaca Quiz!“, city_id: 1)

Quiz_question.create(question: “How many municipalities are in Oaxaca?“, correct_answer: “570”, incorrect_answer_1: “55", incorrect_answer_2: “90”, incorrect_answer_3: “120", quiz_id: 1)
Quiz_question.create(question: “What are two states that border Oaxaca?“, correct_answer: “Guerrero and Puebla”, incorrect_answer_1: “Yucatan and Chiapas”, incorrect_answer_2: “Sonora and Sinaloa”, incorrect_answer_3: “Jalisca and Nuevo Leon”, quiz_id: 1)
Quiz_question.create(question: “What is the population of Oaxaca? (choose closest)“, correct_answer: “3.5 million”, incorrect_answer_1: “2.2 million”, incorrect_answer_2: “1.7 million”, incorrect_answer_3: “10 million”, quiz_id: 1)
Quiz_question.create(question: “Oaxaca is the fifth largest state in Mexico”, correct_answer: “True”, incorrect_answer_1: “False”, incorrect_answer_2: “It is not a state”, incorrect_answer_3: “It’s size cannot be measured”, quiz_id: 1)
Quiz_question.create(question: “What prevented large scale Spanish domination through the colonial era?“, correct_answer: “Oaxaca’s highly mountainous geography”, incorrect_answer_1: “A powerfull army”, incorrect_answer_2: “A lack of farming opportunities”, incorrect_answer_3: “Too much wildlife.“, quiz_id: 1)
Quiz_question.create(question: “Which of the below is not a region of Oaxaca?“, correct_answer: “Lo siento”, incorrect_answer_1: “Valles Centrales”, incorrect_answer_2: “La Cañada”, incorrect_answer_3: “El Istmo”, quiz_id: 1)
Quiz_question.create(question: “What is the largest sector of Oaxaca’s economy?“, correct_answer: “Agriculture”, incorrect_answer_1: “Technology”, incorrect_answer_2: “Manufacturing”, incorrect_answer_3: “Engineering and construction”, quiz_id: 1)
Quiz_question.create(question: “Oaxaca is the nation’s second highest producer of:“, correct_answer: “Grains and agave”, incorrect_answer_1: “peanuts and oranges”, incorrect_answer_2: “Mango and sugar cane”, incorrect_answer_3: “Alfalfa and almonds”, quiz_id: 1)
Quiz_question.create(question: “Where would you find most of the tourist attractions in Oaxaca?“, correct_answer: “Valles Centrales”, incorrect_answer_1: “La Cañada”, incorrect_answer_2: “El Istmo”, incorrect_answer_3: “Zipolite”, quiz_id: 1)
Quiz_question.create(question: “Puerto Escondido’s beach Playa Carrizalillo is famous for attracting international:“, correct_answer: “Surfers, incorrect_answer_1: “Snorkelers”, incorrect_answer_2: “Sand castle enthusiests”, incorrect_answer_3: “Long-distance swimmers”, quiz_id: 1)