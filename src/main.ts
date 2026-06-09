import './style.scss'
import { allCards } from './scripts/data.ts'
import { renderCards } from './scripts/render.ts'
import { renderFilters } from './scripts/filters.ts'

const filtersContainer = document.querySelector<HTMLElement>('.filters')
renderFilters(filtersContainer)

const cardsContainer = document.querySelector<HTMLElement>('.catalog__list')
renderCards(cardsContainer, allCards)
