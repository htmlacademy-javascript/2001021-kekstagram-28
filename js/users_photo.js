
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = ({url, likes, comments, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
};

const renderPictures = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = createPictureElement(photo);
    pictureFragment.append(photoElement);
  });
  picturesContainer.append(pictureFragment);
};

export{renderPictures};
