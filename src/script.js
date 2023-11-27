const elements = {
  form: document.querySelector('.search-form'),
  list: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-load-more'),
};

elements.form.addEventListener('submit', handlerGetPhoto);
elements.btnLoadMore.addEventListener('click', handlerGetMorePhoto);

let page = 1;

async function handlerGetMorePhoto(evt) {
  page += 1;
  const search = elements.form.elements.searchQuery.value;
  const resp = await serviceImage(search, page);
  if (page === 12) {
    alert("We're sorry, but you've reached the end of search results.");
    elements.btnLoadMore.classList.replace('load-more', 'load-more-hidden');
  } else {
    elements.list.insertAdjacentHTML('beforeend', createMarckup(resp.hits));
  }
}

async function handlerGetPhoto(evt) {
  evt.preventDefault();
  const value = evt.currentTarget.elements.searchQuery.value;
  page = 1;
  elements.list.innerHTML = '';
  elements.btnLoadMore.classList.replace('load-more', 'load-more-hidden');
  try {
    const result = await serviceImage(value);
    console.log(result);
    if (result.hits.length === 0) {
      return alert(
        '"Sorry, there are no images matching your search query. Please try again."'
      );
    }
    elements.list.insertAdjacentHTML('beforeend', createMarckup(result.hits));
    elements.btnLoadMore.classList.replace('load-more-hidden', 'load-more');
  } catch (error) {
    console.log(error);
  }
}

async function serviceImage(value, page = 1) {
  const MAIN_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '40911522-ba38adab2f7d889473ea5ba96',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });
  const resp = await fetch(`${MAIN_URL}?${params}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
}

function createMarckup(arr) {
  return arr
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
      <div class="photo-card">
    <img class="img-gallery" src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes: ${likes}</b>
        </p>
            <p class="info-item">
        <b>Views: ${views}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${downloads}</b>
        </p>
    </div>
</div>`
    )
    .join('');
}
