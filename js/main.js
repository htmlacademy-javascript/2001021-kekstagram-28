const PICTURE_COUNTS = 25;
const LIKE_MIN_COUNTS = 15;
const LIKE_MAX_COUNTS = 200;
const AVATAR_COUNTS = 6;
const COMMENT_COUNTS = 10;

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
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'

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
// const getRandomComments = (comment) => {
//   const randomComment = Math.floor(Math.random() * COMMENT_COUNT);
//   return comment[randomComment];
// };

//  Генерация идентификатора
const createIndex = () => {
  let index = 1;
  return () => index++;
};

const getFotoId = createIndex();
const getComentsId = createIndex();
const getPictureCounts = createIndex();

const getRandomArrayElement = (element) => element[getRundomNumbers(0, element.length - 1)];


const createComments = () =>
  Array.from({length: getRundomNumbers(1,10)}, () =>
    getRandomArrayElement(COMMENTS)
  );

createComments();

const createComment = () => ({
  id: getComentsId(),
  avatar: getRandomeAvatar(),
  message: createComments(),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  id: getFotoId(),
  url: `photos/${getPictureCounts()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRundomNumbers(LIKE_MIN_COUNTS, LIKE_MAX_COUNTS),
  comments: Array.from({length: getRundomNumbers(0, COMMENT_COUNTS)},
    createComment
  )
});

const createPhotos = () =>
  Array.from({length: PICTURE_COUNTS}, (_, pictureIndex) =>
    createPhoto(pictureIndex++)
  );

createPhotos();

