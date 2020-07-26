
const URL_API = 'https://rickandmortyapi.com/api/character/'

const getData = async () => {
  const res = await fetch(URL_API)
  const data = await res.json()
  return data
}

export default getData
