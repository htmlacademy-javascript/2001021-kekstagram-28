const PICTURE_COUNTS = 25;
const LIKE_MIN_COUNTS = 15;
const LIKE_MAX_COUNTS = 200;
const AVATAR_COUNTS = 6;

const NAMES = [
  'Артем',
  'Ольга',
  'Петр',
  'Диана',
  'Владимир',
  'Иван',
  'Олеся',
];

const DESCRIPTIONS = ['Фото с Бали', 'Отдых с семьей', 'Серфинг'];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
];

//  Генерация случайного числа между min и max включая оба значения
const getRundomNumbers = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

//  Генерация случайного avatar
const getRandomeAvatar = () => {
  const randomImg = Math.floor(Math.random() * AVATAR_COUNTS);
  return `avatar-${randomImg}.svg`;
};

//  Генерация случайного коментария
const getRandomComments = (comment) => {
  const randomComment = Math.floor(Math.random() * comment.length);
  return comment[randomComment];
};

//  Генерация идентификатора
const createIndex = () => {
  let index = 1;
  return () => index++;
};

const getFotoId = createIndex();
const getComentsId = createIndex();
const getPictureCount = createIndex();

const getRandomArrayElement = (element) => element[getRundomNumbers(0, element.length - 1)];

const createPhoto = () => ({
  id: getFotoId(),
  url: `photos/${getPictureCount()}.jpg`,

  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRundomNumbers(LIKE_MIN_COUNTS, LIKE_MAX_COUNTS),
  comments: {
    id: getComentsId(),
    name: getRandomArrayElement(NAMES),
    messsage: getRandomComments(COMMENTS),
    avatar: getRandomeAvatar(),
  }


});

const getPicture = () =>
  Array.from({length: PICTURE_COUNTS}, (_, pictureIndex) =>
    createPhoto(pictureIndex++)
  );
console.log(getPicture());


console.log(createPhoto());
