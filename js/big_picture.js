import {isEscEvent} from './util.js';

const LIST_CLASS_NAME = 'social__comment';
const IMAGES_CLASS_NAME = 'social__picture';
const PARAGRAF_CLASS_NAME = 'social__text';
const COMMENT_AVATAR_SIZE = 35;
const COMMENTS_AMOUNT = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social-comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const comentsCount = bigPicture.querySelector('.comments-count');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');


// Создаем модальное окно и наполняем его данными
const createBigPhoto = (url, likes, comments, description) => {
  bigPictureImg.src = url;
  comentsCount.textContent = comments.length;
  likesCount.textContent = likes;
  socialCaption.textContent = description;

  // скрываем cчетчик коментариев и загруза новых коментариев
  socialCommentCount.hidden = true;
  commentsLoader.hidden = true;
};

// Создаем cписок коментариев
const createComments = (comments) => {
  socialComments.innerHTML = '';

  // Создаем разметку списка коментариев
  if (comments) {
    comments.forEach((comment) => {
      const newList = document.createElement('li');
      const newImages = document.createElement('img');
      const newParagraf = document.createElement('p');

      newList.className = LIST_CLASS_NAME;
      newImages.className = IMAGES_CLASS_NAME;
      newImages.src = comment.avatar;
      newImages.alt = comment.name;
      newImages.width = COMMENT_AVATAR_SIZE;
      newImages.height = COMMENT_AVATAR_SIZE;
      newParagraf.className = PARAGRAF_CLASS_NAME;
      newParagraf.textContent = comment.message;

      newList.appendChild(newImages);
      newList.appendChild(newParagraf);
      socialComments.appendChild(newList);
    });
  }
  if (comments.length >= COMMENTS_AMOUNT) {
    const commentsList = socialComments.querySelectorAll('.social__comment');
    socialCommentCount.hidden = false;
    socialCommentCount.textContent = `${COMMENTS_AMOUNT} из ${commentsList.length} комментариев`;

    // Скрываем
    for (let i = 0; i < comments.length; i++) {
      if (i >= COMMENTS_AMOUNT) {
        commentsList[i].classList.add('hidden');
        commentsLoader.hidden = false;
      }
    }
  }
};

// Закрываем модальное окно
const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  // Удаляем события после закрытия модального окна
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onDocumentKeydown);
  closePictureButton.removeEventListener('click', onCancelButtonClick);
};
// Скрываем модальное окно при нажатии Esc
const onDocumentKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

// Открываем модальное окно
const openBigPicture = (photo) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  // Добавляем события после закрытия модального окна
  document.addEventListener('keydown', onDocumentKeydown);
  closePictureButton.addEventListener('click', onCancelButtonClick);

  createBigPhoto(photo);
  createComments(photo.comments);
};

function onCancelButtonClick() {
  return closeBigPhoto();
}

export {
  openBigPicture,
  createBigPhoto
};
