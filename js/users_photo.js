
const picturesContainer = document.querySelector('.pictures');
const pictureUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');

const samePictureFragment = document.createDocumentFragment();
const similarPictures = (element) => {
  element.forEach(({url, likes, comments}) => {
    const pictureElement = pictureUsersTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    samePictureFragment.append(pictureElement);
    picturesContainer.appendChild(pictureElement);
  });
};

export{similarPictures};
