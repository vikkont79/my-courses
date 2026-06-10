export let visibleCardsCount = 9;
const cardsPerLoad = 3;

export function updateLoadMoreButton(filteredTotal: number) {
  const loadMoreBtn = document.querySelector<HTMLElement>('.catalog__button');
  if (!loadMoreBtn) return;

  if (visibleCardsCount >= filteredTotal) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'flex';
  }
}

export function loadMoreCards() {
  visibleCardsCount += cardsPerLoad;
}

export function resetPagination() {
  visibleCardsCount = 9;
}
