/*Функция для проверки длины строки */
function getStringLength(str, val) {
  // Проверяем длину строки и сравниваем с максимальной
  if (str.length <= val) {
    return true;
  }
  return false;
}
getStringLength("проверяемая строка", 20); // true
getStringLength("проверяемая строка", 18); // true
getStringLength("проверяемая строка", 10); // false

// Функция для проверки, является ли строка палиндромом
function chekedPalindrom(str) {
  // Переводим в нижний регистр и удаляем все лишние отступы
  let strToLower = str.toLowerCase().trim();
  return strToLower == strToLower.split("").reverse().join("");
}

chekedPalindrom("ДовОд "); // true
chekedPalindrom("топот"); // true
chekedPalindrom("Кекс"); // false

function checkNewPalindrom(str) {
  let strToLower = str.toLowerCase().trim();
  let res = "";
  for (let i = strToLower.length - 1; i >= 0; --i) {
    res += strToLower[i];
    console.log(res);
  }
  return res == strToLower.split("").reverse().join("");
}
checkNewPalindrom("Лёша на полке клопа нашёл "); // true

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа */
function extractNumberOfString(value) {
  let num = "";
  // Если приходит число
  if (typeof value === "number") {
    return value;
  }
  // Если приходит строка, обходим ее циклом
  for (let i = 0; i < value.length; i++) {
    const isInt = parseInt(value[i]);
    // Если число, то присваиваем значение переменной num
    if (isInt || isInt === 0) {
      num += value[i];
    }
  }
  // Если не число, вернуть NaN
  if (num.length === 0) {
    return NaN;
  }
  return num;
}
extractNumberOfString("а я томат");
extractNumberOfString("2023 год");
extractNumberOfString("ECMAScript 2022");
extractNumberOfString("1 кефир, 0.5 батона");
extractNumberOfString(2030);
extractNumberOfString(-1);

/**Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. */
function padStart(str, len, padstr) {
  // Если длина строки больше заданой длины
  if (str.length > len) {
    return str;
  }
  let subStr = "";
  /* Пока subStr меньше заданой длины, проходим циклом и присваеваем значение в переменную subStr */
  while (subStr.length < len) {
    subStr += padstr;
    //console.log(subStr);
  }
  /* Если строка слишком длинная обрезаем с конца и конкатенируем с исходной строкой */
  return subStr.slice(0, len - str.length) + str;
}
padStart("1", 2, "0");
padStart("1", 4, "0");
padStart("q", 4, "werty");
padStart("q", 4, "we");
padStart("qwerty", 4, "0");
padStart("qwerty", 3, "0");
