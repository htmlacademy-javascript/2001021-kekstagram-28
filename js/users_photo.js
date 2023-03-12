
const picturesContainer = document.querySelector('.pictures');
const pictureUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');

const clonePictureElement = ({url, likes, comments}) => {
  const pictureElement = pictureUsersTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesContainer.append(pictureElement);
};

const makeSimilarPictures = (element) => {
  const pictureFragment = document.createDocumentFragment();
  element.forEach(clonePictureElement);
  pictureFragment.append(element);
};

export{makeSimilarPictures};
