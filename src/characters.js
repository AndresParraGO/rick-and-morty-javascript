import getData from './api.js'


const charactersContainer =  document.getElementById('characters')
const loading = document.getElementById('loading')



const getCharacters = async (filter) => {
  const data = await getData(filter)

  loading.style.display = 'none'

  charactersContainer.innerHTML = ''


  if(data.results) {
    data.results.forEach(character => {
      renderCharacter(character)
    })
  } else {
    loading.style.display = 'block'
  }

}


const renderCharacter = ( {image, name, gender, species} ) => {
  const card = document.createElement('article')
  card.className = 'character'
  card.innerHTML = `
    <img src=${image} />
    <div class="character-text">
      <p class="character-title">${name}</p>

      <p class="character-category">Gender:</p>
      <span class="character-gender">${gender}</span>

      <p class="character-category">Species:</p>
      <span class="character-gender">${species}</span>
    </div>
  `
  charactersContainer.appendChild(card)
}



export {getCharacters, renderCharacter}
