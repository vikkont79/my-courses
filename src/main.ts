import './style.scss'
import { renderFilters } from './scripts/filters.ts'
import { update, setCurrentCategory, setCurrentSearch } from './scripts/update'
import { resetPagination } from './scripts/upload'



const filtersContainer = document.querySelector<HTMLElement>('.filters')
const searchInput = document.querySelector<HTMLInputElement>('.search__input')

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    setCurrentSearch((e.target as HTMLInputElement).value)
    resetPagination()
    update()
  })
}

if (filtersContainer) {
  filtersContainer.addEventListener('click', (e) => {
    const button = (e.target as HTMLElement).closest('.filters__button')
    if (!button) return

    const category = button.getAttribute('data-category');
    if (!category) return

    setCurrentCategory(category)
    resetPagination()
    update()
  })
}

const loadMoreBtn = document.querySelector<HTMLElement>('.catalog__button')
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    resetPagination()
    update()
  })
}

renderFilters(filtersContainer)
update()

