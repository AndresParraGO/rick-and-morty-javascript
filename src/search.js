
import {getCharacters} from './characters.js'


const iconSearch = document.getElementById('header-icon-search')
const inputSearch = document.getElementById('header-search')



const search = () => {
  iconSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('is-show-search')
  })

  inputSearch.addEventListener('keyup', () => {
    getCharacters(inputSearch.value)
  })
}



export default search
