import {json} from "./parser.js";
import {read} from "./reader.js";
import {GameSaving} from "./gamesaving.js";

export default class GameSavingLoader {
    static load() {
       return read()// read возвращает Promise с ArrayBuffer
        .then(data => json(data)) // json преобразует ArrayBuffer в строку
        .then(dataStr => JSON.parse(dataStr)) // преобразуем строку в объект
        .then(parseData => new GameSaving(parseData)) // создаём объект GameSaving
    }
}