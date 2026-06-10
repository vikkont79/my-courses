import { allCards } from './data';
import { filterCards, updateFiltersCounters } from './filters';
import { renderCards } from './render';
import { updateLoadMoreButton } from './upload';

let currentCategory: string = 'all'
let currentSearch: string = ''
let visibleCardsCount = 9
const cardsPerLoad = 3

export function setCurrentCategory(category: string) {
  currentCategory = category
}

export function setCurrentSearch(search: string) {
  currentSearch = search
}

export function loadMoreCards() {
  visibleCardsCount += cardsPerLoad;
}

export function resetPagination() {
  visibleCardsCount = 9;
}

export function update() {
  const cardsContainer = document.querySelector<HTMLElement>('.catalog__list')
  if (!cardsContainer) return

  const filtered = filterCards(allCards, currentCategory, currentSearch)
  const visibleCards = filtered.slice(0, visibleCardsCount)

  renderCards(cardsContainer, visibleCards)
  updateLoadMoreButton(filtered.length, visibleCardsCount)
  updateFiltersCounters(filtered)

  document.querySelectorAll('.filters__button').forEach(btn => {
    btn.classList.remove('filters__button--active')
  })

  const activeBtn = document.querySelector(`.filters__button[data-category="${currentCategory}"]`)
  activeBtn?.classList.add('filters__button--active')
}
