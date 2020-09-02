
const getPhrasesByCityId = (phrasesData, city) => {
//is it 2 or 3?

if (city === 'Istanbul') {
  return phrasesData.filter(item => item.city_id === 2)
}

if (city === 'Saigon') {
  return phrasesData.filter(item => item.city_id === 3)
}

}

export { getPhrasesByCityId };