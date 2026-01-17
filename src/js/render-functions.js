import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
    <img src="${webformatURL}" alt="${tags}" class="gallery-img" />
    <div class="info">
      <div class="info-item" title="Likes">
        <span class="emoji">👍</span>
        <span class="number">${likes}</span>
      </div>
      <div class="info-item" title="Views">
        <span class="emoji">👁</span>
        <span class="number">${views}</span>
      </div>
      <div class="info-item" title="Comments">
        <span class="emoji">💬</span>
        <span class="number">${comments}</span>
      </div>
      <div class="info-item" title="Downloads">
        <span class="emoji">⬇</span>
        <span class="number">${downloads}</span>
      </div>
    </div>
  </a>
</li>

    `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
