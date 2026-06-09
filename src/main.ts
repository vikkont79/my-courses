import './style.scss'
import { allCards } from './scripts/data.ts'
import { renderCards } from './scripts/render.ts'
import { renderFilters, filterCards } from './scripts/filters.ts'

let currentCategory = 'all'
let currentSearch = ''

const filtersContainer = document.querySelector<HTMLElement>('.filters')
const cardsContainer = document.querySelector<HTMLElement>('.catalog__list')
const searchInput = document.querySelector<HTMLInputElement>('.search__input')

function update() {
  if (!cardsContainer) return

  const filtered = filterCards(allCards, currentCategory, currentSearch)
  renderCards(cardsContainer, filtered)

  document.querySelectorAll('.filters__button').forEach(btn => {
    btn.classList.remove('filters__button--active')
  })

  const activeBtn = document.querySelector(`.filters__button[data-category="${currentCategory}"]`)
  activeBtn?.classList.add('filters__button--active')
}

renderFilters(filtersContainer)
update()

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = (e.target as HTMLInputElement).value
    update();
  })
}

if (filtersContainer) {
  filtersContainer.addEventListener('click', (e) => {
    const button = (e.target as HTMLElement).closest('.filters__button')
    if (!button) return

    const category = button.getAttribute('data-category')
    if (!category) return;

    currentCategory = category
    update()
  })
}

