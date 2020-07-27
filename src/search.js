
import getData from './api.js'
import {getCharacters, renderCharacter} from './characters.js'


const iconSearch = document.getElementById('header-icon-search')
const inputSearch = document.getElementById('header-search')



const search = () => {
  iconSearch.addEventListener('click', e => {
    inputSearch.classList.toggle('is-show-search')
  })

  inputSearch.addEventListener('keyup', e => {
    getCharacters(inputSearch.value)
  })
}



export default search
