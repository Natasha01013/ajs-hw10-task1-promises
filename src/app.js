import GameSavingLoader from "./gamesavingloader.js";

GameSavingLoader.load().then((saving) => {
    console.log('Загрузка прошла успешно', saving);
  }, (error) => {
    console.error('Ошибка при загрузке', error);
  });