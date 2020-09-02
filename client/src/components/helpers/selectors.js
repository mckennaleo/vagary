
const getPhrasesByCityId = (phrasesData, city) => {
  let theCity;
  if (city === 'Istanbul') {
    theCity = 2
  } else if (city === 'Saigon') {
    theCity = 3
  }
  return phrasesData.filter(item => item.city_id === theCity)

}

export { getPhrasesByCityId };

