// Styles
import './scss/index.scss'

import './assets/logo.png'
import './assets/morty.png'


import search from './search.js'
import {getCharacters,forCharacters} from './characters.js'


document.addEventListener('DOMContentLoaded', () => {
  search()
  getCharacters('', () => { forCharacters() })
})
