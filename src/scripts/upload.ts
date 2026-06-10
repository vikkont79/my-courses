export function updateLoadMoreButton(filteredTotal: number, visibleCount: number) {
  const loadMoreBtn = document.querySelector<HTMLElement>('.catalog__button');
  if (!loadMoreBtn) return;

  if (visibleCount >= filteredTotal) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'flex';
  }
}

