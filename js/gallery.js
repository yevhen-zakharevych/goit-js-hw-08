const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

createGallery(images);
addListener();

function addListener() {
  const galleryEl = document.querySelector('.gallery');

  galleryEl.addEventListener('click', onGalleryClick);
}

function onGalleryClick(event) {
  const img = event.target.closest('img');

  if (!img) {
    return;
  }

  event.preventDefault();
  const src = img.dataset.source;
  const alt = img.alt;

  const modal = basicLightbox.create(
    `<img src="${src}" alt="${alt}" width="1112" height="640">`
  );

  modal.show();
}

function createGallery(images) {
  const galleryEl = document.querySelector('.gallery');

  images.forEach(image => {
    const galleryItemEl = createGalleryItem(image);
    galleryEl.append(galleryItemEl);
  });
}

function createGalleryItem({ preview, original, description }) {
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery-link');
  linkEl.setAttribute('href', original);
  galleryItemEl.append(linkEl);

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-image');
  imgEl.setAttribute('src', preview);
  imgEl.setAttribute('data-source', original);
  imgEl.setAttribute('alt', description);
  linkEl.append(imgEl);

  return galleryItemEl;
}
