
const iconSearch = document.getElementById('header-icon-search')
const inputSearch = document.getElementById('header-search')

const search = () => {
  iconSearch.addEventListener('click', e => {
    inputSearch.classList.toggle('is-show-search')
  })
}



export default search
