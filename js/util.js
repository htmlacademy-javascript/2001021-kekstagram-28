//  Генерация случайного числа между min и max включая оба значения
const getRundomNumbers = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const getRandomArrayElement = (element) => element[getRundomNumbers(0, element.length - 1)];

export{getRundomNumbers, getRandomArrayElement};
