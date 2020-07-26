
// Styles
import './scss/index.scss'

import search from './search.js'
import getData from './api.js'


const charactersContainer =  document.getElementById('characters')


const getCharacters = async () => {
  const data = await getData()
  console.log(data)
  data.results.forEach(character => {
    renderCharacter(character)
  })
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



document.addEventListener('DOMContentLoaded', e => {
  search()
  getCharacters()
})
