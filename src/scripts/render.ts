import { type Card } from './data.ts'

export function renderCards(container: HTMLElement | null, cards: Card[]): void {
  if (!container) return

  const template = document.getElementById('card-template') as HTMLTemplateElement | null
  if (!template) return

  const fragment = document.createDocumentFragment()

  cards.forEach(card => {
    const clone = template.content.cloneNode(true) as DocumentFragment

    const image = clone.querySelector('.card__image') as HTMLImageElement | null
    if (image) {
      image.src = card.author.avatar
      image.alt = `Photo of ${card.author.name}`
    }

    const badge = clone.querySelector('.card__badge') as HTMLElement | null
    if (badge) {
      badge.textContent = card.badge
      badge.setAttribute('data-category', card.category)
    }

    const title = clone.querySelector('.card__title') as HTMLElement | null
    if (title) title.textContent = card.title

    const price = clone.querySelector('.card__price') as HTMLElement | null
    if (price) price.textContent = `$${card.price}`

    const author = clone.querySelector('.card__author') as HTMLElement | null
    if (author) author.textContent = `by ${card.author.name}`

    fragment.appendChild(clone)
  })

  container.innerHTML = ''
  container.appendChild(fragment)
}
