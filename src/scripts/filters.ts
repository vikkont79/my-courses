import { allCards } from './data.ts'

interface Category {
  id: string;
  name: string;
  count: number;
}

export function getCategoriesWithCounts(): Category[] {
  const counts = new Map<string, number>()

  allCards.forEach(card => {
    const count = counts.get(card.category) ?? 0
    counts.set(card.category, count + 1)
  })

  const categories = [
    { id: 'all', name: 'All', count: allCards.length }
  ]

  const addedCategories = new Set<string>()

  allCards.forEach(card => {
    if (!addedCategories.has(card.category)) {
      addedCategories.add(card.category)
      categories.push({
        id: card.category,
        name: card.badge,
        count: counts.get(card.category) ?? 0
      })
    }
  })

  return categories
}

export function renderFilters(container: HTMLElement | null): void {
  if (!container) return

  const categories = getCategoriesWithCounts()

  container.innerHTML = categories.map((cat: Category) => `
    <li class="filters__item">
      <button class="filters__button ${cat.id === 'all' ? 'filters__button--active' : ''} button"
              data-category="${cat.id}">
        ${cat.name}
        <span class="filters__count">${cat.count}</span>
      </button>
    </li>
  `).join('')
}
