import {createPhotos} from './data.js';
import {renderPictures} from './users_photo.js';
import {openBigPicture} from './big_picture.js';
import {picturesContainer} from './users_photo.js';

renderPictures(createPhotos());

const onPicturesClick = (evt) => {
  if (evt.target.closest('.picture')) {
    const element = evt.target.closest('.picture');
    const arrayIndex = element.dataset.id;

    openBigPicture(arrayIndex);
  }
};


picturesContainer.addEventListener('click', onPicturesClick);
